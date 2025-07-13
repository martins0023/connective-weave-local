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
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Your Neighbors</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            Build meaningful connections with people in your area. 
            Start conversations, share interests, and strengthen your local community bonds.
          </p>
        </div>

        {/* Icebreaker Prompts */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <MessageSquare className="mr-2 text-organic-green-600" size={18} />
                Conversation Starters
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Use these prompts to break the ice and start meaningful conversations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {introductionPrompts.map((prompt, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="p-3 sm:p-4 h-auto text-left justify-start border-organic-green-200 hover:bg-organic-green-50 text-gray-700 text-xs sm:text-sm"
                  >
                    "{prompt}"
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Your Introduction */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200 mb-4 sm:mb-6">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Plus className="mr-2 text-organic-green-600" size={18} />
                  Share Your Introduction
                </CardTitle>
                <CardDescription className="text-sm">
                  Let your neighbors know who you are and what you're interested in
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="text-center">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                    <AvatarFallback className="bg-organic-green-400 text-white text-base sm:text-lg">YU</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">Your Introduction</h3>
                </div>
                <Button className="w-full bg-organic-green-400 hover:bg-organic-green-500 text-white text-sm sm:text-base">
                  Update Your Profile
                </Button>
                <Button variant="outline" className="w-full border-organic-green-400 text-organic-green-600 text-sm sm:text-base">
                  Add Interests & Skills
                </Button>
              </CardContent>
            </Card>

            {/* Matching Algorithm Info */}
            <Card className="bg-white/70 backdrop-blur-sm border-muted-plum-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-plum-600">How We Connect You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="mr-2 text-muted-plum-400 flex-shrink-0" size={12} />
                  <span>Proximity-based matching</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 text-muted-plum-400 flex-shrink-0" size={12} />
                  <span>Shared interests & values</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-muted-plum-400 flex-shrink-0" size={12} />
                  <span>Activity alignment</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Neighbor Profiles */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Neighbors Near You</h2>
              <Button variant="outline" className="border-organic-green-400 text-organic-green-600 text-sm sm:text-base">
                <Users className="mr-2" size={14} />
                View All
              </Button>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {neighbors.map((neighbor, index) => (
                <Card key={neighbor.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                          <AvatarFallback className="bg-organic-green-400 text-white text-sm">
                            {neighbor.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                          <div className="min-w-0">
                            <h3 className="font-semibold text-gray-900 flex items-center flex-wrap gap-2">
                              <span className="truncate">{neighbor.name}</span>
                              {neighbor.joinedRecently && (
                                <Badge className="bg-blue-100 text-blue-800 text-xs">New</Badge>
                              )}
                            </h3>
                            <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1 flex-wrap gap-1">
                              <div className="flex items-center">
                                <MapPin className="mr-1" size={10} />
                                <span className="truncate">{neighbor.distance}</span>
                              </div>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center">
                                <Users className="mr-1" size={10} />
                                <span>{neighbor.mutualConnections} mutual connections</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">{neighbor.introduction}</p>
                        
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          {neighbor.interests.map((interest, interestIndex) => (
                            <Badge 
                              key={interest} 
                              className={`${interestColors[interestIndex % interestColors.length]} text-xs`}
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <Button size="sm" className="bg-organic-green-400 hover:bg-organic-green-500 text-white text-xs sm:text-sm">
                            <MessageSquare className="mr-1" size={12} />
                            Say Hello
                          </Button>
                          <Button size="sm" variant="outline" className="border-organic-green-400 text-organic-green-600 text-xs sm:text-sm">
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
