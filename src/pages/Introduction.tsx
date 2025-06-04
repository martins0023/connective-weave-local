
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Users, MessageSquare, MapPin, Calendar, Plus } from "lucide-react";

const Introduction = () => {
  const [neighbors] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      initials: "SC",
      distance: "Next door",
      interests: ["Gardening", "Sustainability", "Cooking"],
      introduction: "Hi! I'm passionate about sustainable living and love sharing garden tips. Always happy to lend a hand with projects!",
      joinedRecently: true,
      mutualConnections: 3
    },
    {
      id: 2,
      name: "Marcus Johnson",
      initials: "MJ",
      distance: "2 blocks away",
      interests: ["Technology", "DIY", "Music"],
      introduction: "Software engineer by day, maker by night. I enjoy fixing things and teaching tech skills to anyone interested.",
      joinedRecently: false,
      mutualConnections: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      initials: "ER",
      distance: "3 blocks away",
      interests: ["Childcare", "Community Events", "Art"],
      introduction: "Parent of two wonderful kids. I love organizing community gatherings and art projects for families.",
      joinedRecently: true,
      mutualConnections: 7
    },
    {
      id: 4,
      name: "David Kim",
      initials: "DK",
      distance: "1 block away",
      interests: ["Woodworking", "Mentorship", "Local History"],
      introduction: "Retired carpenter who enjoys sharing woodworking skills and stories about our neighborhood's history.",
      joinedRecently: false,
      mutualConnections: 12
    }
  ]);

  const [introductionPrompts] = useState([
    "What's your favorite thing about living in this neighborhood?",
    "What skills would you love to share or learn?",
    "How do you like to connect with your community?",
    "What's one project you'd love community help with?",
    "What brings you joy in your daily life?"
  ]);

  const interestColors = [
    "bg-organic-green-100 text-organic-green-800",
    "bg-muted-plum-100 text-muted-plum-800",
    "bg-warm-sand-200 text-warm-sand-800",
    "bg-blue-100 text-blue-800",
    "bg-pink-100 text-pink-800"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Neighbors</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Build meaningful connections with people in your area. 
            Start conversations, share interests, and strengthen your local community bonds.
          </p>
        </div>

        {/* Icebreaker Prompts */}
        <div className="mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 text-organic-green-600" size={20} />
                Conversation Starters
              </CardTitle>
              <CardDescription>
                Use these prompts to break the ice and start meaningful conversations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {introductionPrompts.map((prompt, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="p-4 h-auto text-left justify-start border-organic-green-200 hover:bg-organic-green-50 text-gray-700"
                  >
                    "{prompt}"
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Your Introduction */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="mr-2 text-organic-green-600" size={20} />
                  Share Your Introduction
                </CardTitle>
                <CardDescription>
                  Let your neighbors know who you are and what you're interested in
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarFallback className="bg-organic-green-400 text-white text-lg">YU</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-gray-900">Your Introduction</h3>
                </div>
                <Button className="w-full bg-organic-green-400 hover:bg-organic-green-500 text-white">
                  Update Your Profile
                </Button>
                <Button variant="outline" className="w-full border-organic-green-400 text-organic-green-600">
                  Add Interests & Skills
                </Button>
              </CardContent>
            </Card>

            {/* Matching Algorithm Info */}
            <Card className="bg-white/70 backdrop-blur-sm border-muted-plum-200">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-plum-600">How We Connect You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="mr-2 text-muted-plum-400" size={14} />
                  <span>Proximity-based matching</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 text-muted-plum-400" size={14} />
                  <span>Shared interests & values</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-muted-plum-400" size={14} />
                  <span>Activity alignment</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Neighbor Profiles */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Neighbors Near You</h2>
              <Button variant="outline" className="border-organic-green-400 text-organic-green-600">
                <Users className="mr-2" size={16} />
                View All
              </Button>
            </div>

            <div className="space-y-6">
              {neighbors.map((neighbor, index) => (
                <Card key={neighbor.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-organic-green-400 text-white">
                            {neighbor.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 flex items-center">
                              {neighbor.name}
                              {neighbor.joinedRecently && (
                                <Badge className="ml-2 bg-blue-100 text-blue-800 text-xs">New</Badge>
                              )}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPin className="mr-1" size={12} />
                              {neighbor.distance}
                              <span className="mx-2">•</span>
                              <Users className="mr-1" size={12} />
                              {neighbor.mutualConnections} mutual connections
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-3">{neighbor.introduction}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {neighbor.interests.map((interest, interestIndex) => (
                            <Badge 
                              key={interest} 
                              className={interestColors[interestIndex % interestColors.length]}
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button size="sm" className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                            <MessageSquare className="mr-1" size={14} />
                            Say Hello
                          </Button>
                          <Button size="sm" variant="outline" className="border-organic-green-400 text-organic-green-600">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
