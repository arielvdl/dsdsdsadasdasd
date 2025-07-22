import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            LET'S CREATE<br />
            <span className="text-accent-orange">SOMETHING</span><br />
            AMAZING
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-accent-orange mb-2">Email</h4>
                <p className="text-gray-300">hello@fancy.design</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent-orange mb-2">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent-orange mb-2">Location</h4>
                <p className="text-gray-300">New York, NY</p>
              </div>
            </div>

            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Modern creative office space"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full p-4 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-accent-orange focus:outline-none transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full p-4 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-accent-orange focus:outline-none transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-4 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-accent-orange focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="w-full p-4 bg-gray-900 border border-gray-700 text-white focus:border-accent-orange focus:outline-none transition-colors">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Brand Identity">Brand Identity</SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Digital Strategy">Digital Strategy</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full p-4 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-accent-orange focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-accent-orange text-white py-4 px-8 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
