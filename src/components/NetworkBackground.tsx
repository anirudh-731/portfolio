import React, { useRef, useEffect, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const createNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const nodeCount = Math.min(150, Math.floor((width * height) / 15000));
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }
    
    return nodes;
  }, []);

  const findConnections = useCallback((nodes: Node[]) => {
    const maxDistance = 120;
    
    nodes.forEach((node, i) => {
      node.connections = [];
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            node.connections.push(j);
          }
        }
      });
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvas;
    const nodes = nodesRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update node positions
    nodes.forEach(node => {
      // Mouse interaction
      const dx = mouseRef.current.x - node.x;
      const dy = mouseRef.current.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        node.vx -= (dx / distance) * force * 0.01;
        node.vy -= (dy / distance) * force * 0.01;
      }
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      
      // Keep nodes in bounds
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));
      
      // Add some friction
      node.vx *= 0.99;
      node.vy *= 0.99;
    });
    
    // Find connections
    findConnections(nodes);
    
    // Draw connections
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 0.5;
    
    nodes.forEach((node, i) => {
      node.connections.forEach(connectionIndex => {
        if (connectionIndex > i) { // Avoid drawing the same line twice
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Fade based on distance
          const opacity = Math.max(0, (120 - distance) / 120) * 0.6;
          ctx.globalAlpha = opacity;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        }
      });
    });
    
    // Draw nodes
    ctx.globalAlpha = 0.8;
    nodes.forEach(node => {
      // Node glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4);
      gradient.addColorStop(0, '#8B5CF6');
      gradient.addColorStop(0.5, '#6D28D9');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Node core
      ctx.fillStyle = '#A855F7';
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.globalAlpha = 1;
    animationRef.current = requestAnimationFrame(animate);
  }, [findConnections]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    nodesRef.current = createNodes(canvas.width, canvas.height);
  }, [createNodes]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, handleResize, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 100%)' }}
    />
  );
};

export default NetworkBackground;
