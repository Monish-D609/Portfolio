'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Instagram, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'monishpersonal609@gmail.com',
      href: 'mailto:monishpersonal609@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 7676607637',
      href: 'tel:+917676607637',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Bangalore, India',
      href: 'https://www.google.com/maps/search/?api=1&query=Bangalore,+India',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'monish-d07',
      href: 'https://www.linkedin.com/in/monish-d07/',
      color: 'text-blue-700 dark:text-blue-400'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'Monish-D609',
      href: 'https://github.com/Monish-D609',
      color: 'text-foreground'
    }
  ];

  return (
    <div className="space-y-6 pb-16">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          I'm always excited to connect with fellow tech enthusiasts, discuss opportunities, or just chat about the latest in AI and data science!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-muted ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            • Data Science & AI opportunities • AI Automation projects • 
            Open source contributions • Tech community connections
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Feel free to reach out for collaborations, job opportunities, or just to discuss the latest in tech! 
          I'm particularly interested in projects that combine AI/ML with real-world impact.
        </p>
      </div>
    </div>
  );
}
