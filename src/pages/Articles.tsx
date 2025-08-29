import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring React apps that can grow with your team and user base.",
      date: "2024-02-15",
      readTime: "8 min read",
      category: "React",
      link: "#",
      featured: true
    },
    {
      title: "The Future of Web Development with AI",
      excerpt: "Exploring how artificial intelligence is reshaping the way we build and interact with web applications.",
      date: "2024-01-28",
      readTime: "6 min read",
      category: "AI/ML",
      link: "#",
      featured: false
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "Advanced TypeScript patterns and techniques that every developer should know.",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "TypeScript",
      link: "#",
      featured: true
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A comprehensive guide to choosing the right CSS layout method for your project.",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "CSS",
      link: "#",
      featured: false
    },
    {
      title: "Building Real-time Apps with WebSockets",
      excerpt: "Step-by-step guide to implementing real-time features in your web applications.",
      date: "2023-12-05",
      readTime: "12 min read",
      category: "Backend",
      link: "#",
      featured: false
    },
    {
      title: "Performance Optimization Techniques",
      excerpt: "Proven strategies to make your web applications faster and more efficient.",
      date: "2023-11-18",
      readTime: "7 min read",
      category: "Performance",
      link: "#",
      featured: true
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500/20 text-blue-400',
      'AI/ML': 'bg-purple-500/20 text-purple-400',
      'TypeScript': 'bg-cyan-500/20 text-cyan-400',
      'CSS': 'bg-green-500/20 text-green-400',
      'Backend': 'bg-orange-500/20 text-orange-400',
      'Performance': 'bg-red-500/20 text-red-400',
    };
    return colors[category] || 'bg-primary/20 text-primary';
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Articles & Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="gradient-card rounded-xl overflow-hidden group hover:glow-primary transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                    asChild
                  >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            All Articles
          </h2>
          
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="gradient-card rounded-xl p-6 group hover:glow-primary transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent">
                          Featured ✨
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:flex-shrink-0">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                      asChild
                    >
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read Article
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="gradient-card rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to my newsletter for the latest articles and web development insights.
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a href="#newsletter">
                Subscribe Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;