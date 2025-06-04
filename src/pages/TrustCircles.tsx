
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Users, Plus, MessageSquare, Calendar } from "lucide-react";

const TrustCircles = () => {
  const [trustCircles] = useState([
    {
      id: 1,
      name: "Close Neighbors",
      description: "Direct neighbors within 2 blocks",
      level: "Inner Circle",
      members: [
        { name: "Sarah Chen", initials: "SC", role: "Garden Coordinator", proximity: "Next door" },
        { name: "Marcus Johnson", initials: "MJ", role: "Tech Helper", proximity: "Across street" },
        { name: "Emma Rodriguez", initials: "ER", role: "Childcare Coordinator", proximity: "Two blocks" }
      ],
      color: "bg-organic-green-400"
    },
    {
      id: 2,
      name: "Skill Sharers",
      description: "Community members I exchange skills with",
      level: "Trust Circle",
      members: [
        { name: "David Kim", initials: "DK", role: "Carpenter", proximity: "Same neighborhood" },
        { name: "Lisa Thompson", initials: "LT", role: "Chef", proximity: "Walking distance" },
        { name: "Ahmed Hassan", initials: "AH", role: "Mechanic", proximity: "Bike ride" }
      ],
      color: "bg-muted-plum-400"
    },
    {
      id: 3,
      name: "Environmental Action",
      description: "Sustainability and environmental initiatives",
      level: "Interest Circle",
      members: [
        { name: "Jennifer Walsh", initials: "JW", role: "Organizer", proximity: "Local area" },
        { name: "Carlos Mendez", initials: "CM", role: "Educator", proximity: "Local area" },
        { name: "Nina Patel", initials: "NP", role: "Volunteer", proximity: "Local area" }
      ],
      color: "bg-warm-sand-400"
    }
  ]);

  const levelBadgeColors = {
    "Inner Circle": "bg-organic-green-100 text-organic-green-800",
    "Trust Circle": "bg-muted-plum-100 text-muted-plum-800",
    "Interest Circle": "bg-warm-sand-200 text-warm-sand-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trust Circles</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Build meaningful relationships through tiered trust networks. 
            Connect with neighbors based on proximity, shared interests, and mutual support.
          </p>
        </div>

        {/* Trust Level Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-organic-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <CardTitle className="text-organic-green-600">Inner Circle</CardTitle>
              <CardDescription>Immediate neighbors and closest community members</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur-sm border-muted-plum-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-muted-plum-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="text-white" size={24} />
              </div>
              <CardTitle className="text-muted-plum-600">Trust Circle</CardTitle>
              <CardDescription>Skill sharers and regular collaborators</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur-sm border-warm-sand-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-warm-sand-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <CardTitle className="text-warm-sand-700">Interest Circle</CardTitle>
              <CardDescription>Shared interest groups and casual connections</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Trust Circles */}
        <div className="space-y-8">
          {trustCircles.map((circle) => (
            <Card key={circle.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <div className={`w-4 h-4 ${circle.color} rounded-full mr-3`}></div>
                      {circle.name}
                    </CardTitle>
                    <CardDescription className="mt-2">{circle.description}</CardDescription>
                  </div>
                  <Badge className={levelBadgeColors[circle.level as keyof typeof levelBadgeColors]}>
                    {circle.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {circle.members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50">
                      <Avatar>
                        <AvatarFallback className={`${circle.color} text-white`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.proximity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-3 mt-6">
                  <Button className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                    <MessageSquare className="mr-2" size={16} />
                    Group Chat
                  </Button>
                  <Button variant="outline" className="border-organic-green-400 text-organic-green-600">
                    <Plus className="mr-2" size={16} />
                    Invite Member
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCircles;
