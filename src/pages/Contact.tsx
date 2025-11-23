import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you! I'll respond within 24 hours.", {
      description: "Your message has been received.",
    });
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            I'm here to support you with virtual assistance or tutoring services. 
            Let's connect and discuss how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="va">Virtual Assistance</SelectItem>
                      <SelectItem value="ged">GED Tutoring</SelectItem>
                      <SelectItem value="hesi">HESI Tutoring</SelectItem>
                      <SelectItem value="teas">TEAS Tutoring</SelectItem>
                      <SelectItem value="other">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your needs..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardHeader>
                <CardTitle>Direct Contact</CardTitle>
                <CardDescription>Prefer to reach out directly?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a 
                      href="mailto:apex.virtualdesk@gmail.com"
                      className="text-primary hover:underline"
                    >
                      apex.virtualdesk@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">PayPal</p>
                    <p className="text-muted-foreground">apex.virtualdesk@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You'll receive a prompt response within 24 hours. I look forward to learning 
                  more about how I can support your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
