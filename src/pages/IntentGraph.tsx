
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Plus, Users, MessageSquare, Search } from "lucide-react";

const IntentGraph = () => {
  const [intentions, setIntentions] = useState([
    {
      id: 1,
      title: "Community Garden",
      description: "Looking to start a neighborhood vegetable garden. Need people interested in sustainable growing.",
      category: "Environment",
      matches: 12,
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "Skill Share: Web Development",
      description: "Experienced developer offering to teach HTML, CSS, and JavaScript in exchange for cooking lessons.",
      category: "Learning",
      matches: 8,
      author: "Marcus Johnson"
    },
    {
      id: 3,
      title: "Childcare Cooperative",
      description: "Parents wanting to form a rotation-based childcare group for weekend activities.",
      category: "Family",
      matches: 15,
      author: "Emma Rodriguez"
    }
  ]);

  const [newIntention, setNewIntention] = useState({
    title: "",
    description: "",
    category: ""
  });

  const handleAddIntention = () => {
    if (newIntention.title && newIntention.description) {
      setIntentions([
        ...intentions,
        {
          id: intentions.length + 1,
          ...newIntention,
          matches: Math.floor(Math.random() * 20),
          author: "You"
        }
      ]);
      setNewIntention({ title: "", description: "", category: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Intent Graph Builder</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Share your intentions and discover community members with aligned goals. 
            From skill sharing to collaborative projects, find your tribe.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input 
                placeholder="Search intentions..." 
                className="pl-10 bg-white/70 backdrop-blur-sm border-organic-green-200"
              />
            </div>
            <Button className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
              <Plus className="mr-2" size={16} />
              Add New Intention
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* New Intention Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="mr-2 text-organic-green-600" size={20} />
                  Share Your Intention
                </CardTitle>
                <CardDescription>
                  What would you like to create, learn, or share with your community?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Intention title..."
                  value={newIntention.title}
                  onChange={(e) => setNewIntention({ ...newIntention, title: e.target.value })}
                />
                <Input
                  placeholder="Category (e.g., Learning, Environment, Family)"
                  value={newIntention.category}
                  onChange={(e) => setNewIntention({ ...newIntention, category: e.target.value })}
                />
                <Textarea
                  placeholder="Describe your intention in detail..."
                  value={newIntention.description}
                  onChange={(e) => setNewIntention({ ...newIntention, description: e.target.value })}
                  rows={4}
                />
                <Button 
                  onClick={handleAddIntention}
                  className="w-full bg-organic-green-400 hover:bg-organic-green-500 text-white"
                >
                  Share Intention
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Intentions Feed */}
          <div className="lg:col-span-2 space-y-6">
            {intentions.map((intention) => (
              <Card key={intention.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{intention.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-muted-plum-600 font-medium">{intention.category}</span>
                        <span className="text-sm text-gray-500">by {intention.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-organic-green-600">
                      <Users size={16} />
                      <span className="font-medium">{intention.matches}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{intention.description}</p>
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                      <MessageSquare className="mr-1" size={14} />
                      Connect
                    </Button>
                    <Button size="sm" variant="outline" className="border-organic-green-400 text-organic-green-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntentGraph;
