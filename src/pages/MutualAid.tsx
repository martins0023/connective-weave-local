
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Bell, Plus, Users, Clock, Search } from "lucide-react";

const MutualAid = () => {
  const [requests] = useState([
    {
      id: 1,
      title: "Ride to Medical Appointment",
      description: "Need transportation to doctor's appointment on Friday morning. Happy to cover gas costs.",
      category: "Transportation",
      urgency: "Medium",
      poster: "Margaret Wilson",
      timePosted: "2 hours ago",
      responses: 3,
      status: "Active"
    },
    {
      id: 2,
      title: "Help Moving Furniture",
      description: "Moving a couch and dresser this weekend. Pizza and drinks provided for helpers!",
      category: "Physical Help",
      urgency: "Low",
      poster: "Carlos Mendez",
      timePosted: "5 hours ago",
      responses: 7,
      status: "Active"
    },
    {
      id: 3,
      title: "Childcare for Evening Event",
      description: "Looking for trusted babysitter for 3-year-old while attending community meeting.",
      category: "Childcare",
      urgency: "High",
      poster: "Jennifer Walsh",
      timePosted: "1 day ago",
      responses: 2,
      status: "Active"
    }
  ]);

  const [offers] = useState([
    {
      id: 1,
      title: "Free Garden Vegetables",
      description: "Abundant harvest from my garden! Free tomatoes, zucchini, and herbs for neighbors.",
      category: "Food Sharing",
      poster: "David Kim",
      timePosted: "3 hours ago",
      claimed: 8,
      available: 12
    },
    {
      id: 2,
      title: "Home Repair Skills",
      description: "Carpenter offering help with small repairs and projects. Just cover materials.",
      category: "Skills",
      poster: "Lisa Thompson",
      timePosted: "1 day ago",
      claimed: 2,
      available: 5
    }
  ]);

  const [newRequest, setNewRequest] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "Medium"
  });

  const urgencyColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-orange-100 text-orange-800",
    Low: "bg-green-100 text-green-800"
  };

  const categoryColors = {
    Transportation: "bg-blue-100 text-blue-800",
    "Physical Help": "bg-purple-100 text-purple-800",
    Childcare: "bg-pink-100 text-pink-800",
    "Food Sharing": "bg-green-100 text-green-800",
    Skills: "bg-indigo-100 text-indigo-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mutual Aid Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Share resources, request help, and support your neighbors. 
            Building resilient communities through reciprocal care and collaboration.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input 
                placeholder="Search requests and offers..." 
                className="pl-10 bg-white/70 backdrop-blur-sm border-organic-green-200"
              />
            </div>
            <Button className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
              <Plus className="mr-2" size={16} />
              New Request
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* New Request Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-organic-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 text-organic-green-600" size={20} />
                  Request Help
                </CardTitle>
                <CardDescription>
                  What do you need support with? Your community is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="What do you need help with?"
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                />
                <Input
                  placeholder="Category (e.g., Transportation, Food, Skills)"
                  value={newRequest.category}
                  onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
                />
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  value={newRequest.urgency}
                  onChange={(e) => setNewRequest({ ...newRequest, urgency: e.target.value })}
                >
                  <option value="Low">Low Urgency</option>
                  <option value="Medium">Medium Urgency</option>
                  <option value="High">High Urgency</option>
                </select>
                <Textarea
                  placeholder="Provide details about your request..."
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  rows={4}
                />
                <Button className="w-full bg-organic-green-400 hover:bg-organic-green-500 text-white">
                  Post Request
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Requests and Offers */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Requests */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Active Requests</h2>
              <div className="space-y-4">
                {requests.map((request) => (
                  <Card key={request.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-gray-900">{request.title}</CardTitle>
                        <div className="flex space-x-2">
                          <Badge className={urgencyColors[request.urgency as keyof typeof urgencyColors]}>
                            {request.urgency}
                          </Badge>
                          <Badge className={categoryColors[request.category as keyof typeof categoryColors]}>
                            {request.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {request.poster}</span>
                        <span className="flex items-center">
                          <Clock className="mr-1" size={12} />
                          {request.timePosted}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1" size={12} />
                          {request.responses} responses
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{request.description}</p>
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                          Offer Help
                        </Button>
                        <Button size="sm" variant="outline" className="border-organic-green-400 text-organic-green-600">
                          Send Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Offers */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Offers</h2>
              <div className="space-y-4">
                {offers.map((offer) => (
                  <Card key={offer.id} className="bg-white/70 backdrop-blur-sm border-muted-plum-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-gray-900">{offer.title}</CardTitle>
                        <Badge className={categoryColors[offer.category as keyof typeof categoryColors]}>
                          {offer.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {offer.poster}</span>
                        <span className="flex items-center">
                          <Clock className="mr-1" size={12} />
                          {offer.timePosted}
                        </span>
                        <span>{offer.available} available</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{offer.description}</p>
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-muted-plum-400 hover:bg-muted-plum-500 text-white">
                          Request This
                        </Button>
                        <Button size="sm" variant="outline" className="border-muted-plum-400 text-muted-plum-600">
                          Thank Provider
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualAid;
