
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Plus, Users, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const LocalCoordination = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Community Garden Workday",
      date: "2024-06-15",
      time: "9:00 AM",
      location: "Maple Street Garden",
      attendees: 12,
      organizer: "Sarah Chen",
      description: "Monthly maintenance and planting session. Bring gloves and water!",
      category: "Environment"
    },
    {
      id: 2,
      title: "Skill Share: Basic Electronics",
      date: "2024-06-18",
      time: "7:00 PM",
      location: "Community Center",
      attendees: 8,
      organizer: "Marcus Johnson",
      description: "Learn to repair simple electronics and reduce waste.",
      category: "Learning"
    },
    {
      id: 3,
      title: "Neighborhood Potluck",
      date: "2024-06-22",
      time: "6:30 PM",
      location: "Park Pavilion",
      attendees: 25,
      organizer: "Emma Rodriguez",
      description: "Monthly gathering to strengthen community bonds and share food.",
      category: "Social"
    }
  ]);

  const [tasks] = useState([
    {
      id: 1,
      title: "Set up Little Free Library",
      assignee: "David Kim",
      status: "In Progress",
      dueDate: "2024-06-20",
      priority: "Medium"
    },
    {
      id: 2,
      title: "Organize tool sharing inventory",
      assignee: "Lisa Thompson",
      status: "Pending",
      dueDate: "2024-06-25",
      priority: "Low"
    },
    {
      id: 3,
      title: "Plan summer block party",
      assignee: "Ahmed Hassan",
      status: "In Progress",
      dueDate: "2024-07-01",
      priority: "High"
    }
  ]);

  const categoryColors = {
    Environment: "bg-organic-green-100 text-organic-green-800",
    Learning: "bg-muted-plum-100 text-muted-plum-800",
    Social: "bg-warm-sand-200 text-warm-sand-800"
  };

  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-800",
    "Pending": "bg-yellow-100 text-yellow-800",
    "Completed": "bg-green-100 text-green-800"
  };

  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-orange-100 text-orange-800",
    Low: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-sand-50 to-organic-green-50 font-work-sans">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Coordination</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Organize events, manage shared tasks, and coordinate community activities. 
            Keep everyone aligned on collective goals and upcoming gatherings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Events Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Calendar className="mr-2 text-organic-green-600" size={24} />
                Upcoming Events
              </h2>
              <Button className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                <Plus className="mr-2" size={16} />
                New Event
              </Button>
            </div>
            
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id} className="bg-white/70 backdrop-blur-sm border-organic-green-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                        {event.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="mr-2" size={14} />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-2" size={14} />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="mr-2" size={14} />
                        {event.attendees} attending • Organized by {event.organizer}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-organic-green-400 hover:bg-organic-green-500 text-white">
                        Join Event
                      </Button>
                      <Button size="sm" variant="outline" className="border-organic-green-400 text-organic-green-600">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Users className="mr-2 text-muted-plum-600" size={24} />
                Community Tasks
              </h2>
              <Button className="bg-muted-plum-400 hover:bg-muted-plum-500 text-white">
                <Plus className="mr-2" size={16} />
                New Task
              </Button>
            </div>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <Card key={task.id} className="bg-white/70 backdrop-blur-sm border-muted-plum-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status as keyof typeof statusColors]}`}>
                          {task.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <p>Assigned to: <span className="font-medium">{task.assignee}</span></p>
                      <p>Due: {task.dueDate}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-muted-plum-400 text-muted-plum-600">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 text-gray-600">
                        Update Status
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
  );
};

export default LocalCoordination;
