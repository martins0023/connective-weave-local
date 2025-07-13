
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Bell, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navigation = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: null },
    { href: "/intent-graph", label: "Intent Graph", icon: MessageSquare },
    { href: "/trust-circles", label: "Trust Circles", icon: Users },
    { href: "/coordination", label: "Coordination", icon: Calendar },
    { href: "/mutual-aid", label: "Mutual Aid", icon: Bell },
    { href: "/introduction", label: "Meet Neighbors", icon: Users },
  ];

  const handleNavClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-organic-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-organic-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="font-work-sans font-semibold text-xl text-gray-900">ConnectiveTissue</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 transition-colors ${
                      isActive 
                        ? "bg-organic-green-400 text-white hover:bg-organic-green-500" 
                        : "text-gray-600 hover:text-organic-green-600 hover:bg-organic-green-50"
                    }`}
                  >
                    {Icon && <Icon size={16} />}
                    <span className="font-work-sans">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="text-gray-600 p-2">
                  <Menu size={24} />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh]">
                <DrawerHeader className="flex justify-between items-center">
                  <DrawerTitle className="text-lg font-semibold">Navigation</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <X size={20} />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="px-4 pb-6 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <Link key={item.href} to={item.href} onClick={handleNavClick}>
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className={`w-full justify-start flex items-center space-x-3 h-12 text-base ${
                            isActive 
                              ? "bg-organic-green-400 text-white hover:bg-organic-green-500" 
                              : "text-gray-600 hover:text-organic-green-600 hover:bg-organic-green-50"
                          }`}
                        >
                          {Icon && <Icon size={20} />}
                          <span className="font-work-sans">{item.label}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
