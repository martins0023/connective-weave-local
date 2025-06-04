
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Users, MessageSquare, Calendar, Bell, Arrow, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Intent Graph Builder",
      description: "Define your community intentions and get matched with like-minded neighbors",
      icon: MessageSquare,
      href: "/intent-graph",
      color: "bg-organic-green-50 text-organic-green-600"
    },
    {
      title: "Trust Circles",
      description: "Build tiered relationships based on proximity, shared interests, and reputation",
      icon: Users,
      href: "/trust-circles",
      color: "bg-muted-plum-50 text-muted-plum-600"
    },
    {
      title: "Local Coordination",
      description: "Shared calendar, events, tasks, and collaborative planning tools",
      icon: Calendar,
      href: "/coordination",
      color: "bg-warm-sand-200 text-warm-sand-800"
    },
    {
      title: "Mutual Aid Network",
      description: "Community support, resource sharing, and transparent peer-to-peer assistance",
      icon: Bell,
      href: "/mutual-aid",
      color: "bg-organic-green-50 text-organic-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Strengthening Human Bonds
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="text-muted-plum-500 font-medium">Digitally, contextually, and meaningfully.</span>
            <br />
            ConnectiveTissue is your hyperlocal social operating system for intentional communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/introduction">
              <Button size="lg" className="bg-organic-green-400 hover:bg-organic-green-500 text-white px-8 py-3 text-lg font-medium">
                Meet Your Neighbors
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/intent-graph">
              <Button size="lg" variant="outline" className="border-organic-green-400 text-organic-green-600 hover:bg-organic-green-50 px-8 py-3 text-lg font-medium">
                Explore Intent Graph
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building Stronger Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our modular platform helps neighborhoods, co-housing groups, and grassroots communities
            coordinate, collaborate, and cultivate meaningful relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.title} to={feature.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            A New Vision for Digital Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-muted-plum-600 mb-4">Privacy-First</h3>
              <p className="text-gray-600">
                No surveillance capitalism. Your data belongs to your community, not corporations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-organic-green-600 mb-4">Locally Focused</h3>
              <p className="text-gray-600">
                Strengthen real-world connections with neighbors who share your values and geography.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-warm-sand-700 mb-4">Intentional Design</h3>
              <p className="text-gray-600">
                Every feature promotes meaningful connection, mutual aid, and collective flourishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-organic-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <span className="font-semibold text-xl">ConnectiveTissue</span>
            </div>
            <div className="text-gray-400 text-center">
              <p>Building the future of intentional community.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
