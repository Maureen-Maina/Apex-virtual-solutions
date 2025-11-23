import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Mail, FolderOpen, MessageSquare, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const VirtualAssistance = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Comprehensive document and data management",
      items: [
        "Document management",
        "Data entry",
        "Notes & transcription",
        "Organization",
      ],
    },
    {
      icon: Mail,
      title: "Email & Calendar Management",
      description: "Stay organized and never miss important dates",
      items: [
        "Inbox organization",
        "Scheduling",
        "Follow-ups",
        "Appointment reminders",
      ],
    },
    {
      icon: FolderOpen,
      title: "Digital Organization",
      description: "Streamlined file and workspace management",
      items: [
        "File organization",
        "Workspace management",
        "Cloud system setup (Google Drive, OneDrive)",
        "Digital decluttering",
      ],
    },
    {
      icon: MessageSquare,
      title: "Client Communication",
      description: "Professional correspondence and messaging",
      items: [
        "Responding to inquiries",
        "Preparing messages",
        "Drafting professional communication",
        "Follow-up management",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6">Virtual Assistance Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Apex Virtual Solutions provides reliable online support to help you stay organized, productive, 
            and focused. Whether you're a business owner, freelancer, or remote professional, I offer 
            tailored assistance to simplify your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center animate-fade-in">
          <h2 className="mb-4 text-primary-foreground">Need consistent, reliable assistance?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            I'm here to help streamline your workflow and keep you focused on what matters most.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate("/contact")}
            className="text-lg px-8 py-6"
          >
            Contact for Virtual Assistance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistance;
