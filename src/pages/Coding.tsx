import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Coding = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "yourusername",
      icon: "🔧",
      stats: {
        solved: 450,
        contests: 25,
        ranking: "Top 5%"
      },
      link: "https://leetcode.com/yourusername",
      color: "from-yellow-500 to-orange-500"
    },
    {
      platform: "Codeforces",
      username: "yourusername", 
      icon: "⚔️",
      stats: {
        rating: 1650,
        contests: 40,
        ranking: "Specialist"
      },
      link: "https://codeforces.com/profile/yourusername",
      color: "from-blue-500 to-purple-500"
    },
    {
      platform: "HackerRank",
      username: "yourusername",
      icon: "🏆",
      stats: {
        stars: "5 Star",
        badges: 15,
        ranking: "Gold"
      },
      link: "https://hackerrank.com/yourusername",
      color: "from-green-500 to-emerald-500"
    },
    {
      platform: "CodeChef",
      username: "yourusername",
      icon: "👨‍🍳",
      stats: {
        rating: 1850,
        contests: 30,
        ranking: "4 Star"
      },
      link: "https://codechef.com/users/yourusername",
      color: "from-red-500 to-pink-500"
    },
    {
      platform: "AtCoder",
      username: "yourusername",
      icon: "🎯",
      stats: {
        rating: 1200,
        contests: 15,
        ranking: "Brown"
      },
      link: "https://atcoder.jp/users/yourusername",
      color: "from-indigo-500 to-blue-500"
    },
    {
      platform: "GitHub",
      username: "yourusername",
      icon: "🐱",
      stats: {
        repos: 85,
        stars: 1200,
        ranking: "Top Contributor"
      },
      link: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const achievements = [
    {
      title: "Google Code Jam 2023",
      description: "Advanced to Round 2",
      icon: Trophy,
      date: "2023"
    },
    {
      title: "Facebook Hacker Cup",
      description: "Top 500 Global Ranking",
      icon: Target,
      date: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "100+ commits to React ecosystem",
      icon: Zap,
      date: "2023"
    }
  ];

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
            Coding Profiles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through competitive programming and open source contributions
          </p>
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Platform Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group"
              >
                <div className="gradient-card rounded-xl overflow-hidden hover:glow-primary transition-all duration-300 group-hover:scale-105">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${profile.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{profile.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold">{profile.platform}</h3>
                          <p className="text-white/80">@{profile.username}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        asChild
                      >
                        <a 
                          href={profile.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Visit ${profile.platform} profile`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="text-2xl font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Notable Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="gradient-card rounded-xl p-6 text-center hover:glow-primary transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {achievement.description}
                </p>
                <span className="text-accent font-medium">
                  {achievement.date}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Competitive Programming Languages
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "C++", icon: "🔧", level: "Expert" },
              { name: "Python", icon: "🐍", level: "Advanced" },
              { name: "JavaScript", icon: "📜", level: "Advanced" },
              { name: "Java", icon: "☕", level: "Intermediate" },
              { name: "Go", icon: "🐹", level: "Learning" }
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                className="gradient-card rounded-lg px-6 py-4 flex items-center space-x-3 hover:glow-primary transition-all duration-300"
              >
                <span className="text-2xl">{lang.icon}</span>
                <div>
                  <div className="font-semibold text-foreground">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.level}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="gradient-card rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let's Code Together!
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in pair programming, code reviews, or discussing algorithms? 
              I'm always up for a good coding challenge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                className="hover:scale-105 transition-transform"
                asChild
              >
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Coding;