"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      plotSize: formData.get("plotSize"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
              Are you interested?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Interested in Avon Hills Ressort? Fill out the form below,
              <br className="hidden sm:inline" />
              and our team will get in touch with you!
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl sm:text-3xl font-serif mb-4">
                    Thank You for Your Submission!
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We appreciate your interest in Avon Hills Ressort. Our team
                    will contact you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={50}
                        className="h-10 sm:h-12 focus:ring-2 focus:ring-[#1B4332]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-10 sm:h-12 focus:ring-2 focus:ring-[#1B4332]"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        className="h-10 sm:h-12 focus:ring-2 focus:ring-[#1B4332]"
                        placeholder="Enter your phone number (10 digits)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base">Preferred Plot Size</Label>
                      <RadioGroup
                        name="plotSize"
                        className="flex gap-4 sm:gap-6 pt-2"
                        defaultValue="300"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="200" id="200yards" />
                          <Label
                            htmlFor="200yards"
                            className="text-sm sm:text-base font-normal"
                          >
                            200 Yards
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="300" id="300yards" />
                          <Label
                            htmlFor="300yards"
                            className="text-sm sm:text-base font-normal"
                          >
                            300 Yards
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="500" id="500yards" />
                          <Label
                            htmlFor="500yards"
                            className="text-sm sm:text-base font-normal"
                          >
                            500 Yards
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="min-h-[120px] sm:min-h-[150px] resize-none focus:ring-2 focus:ring-[#1B4332]"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      className="mt-1"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm sm:text-base"
                      style={{ fontWeight: "600" }}
                    >
                      I hereby authorize the sending of notifications via SMS,
                      email, RCS, and other communication channels, in
                      accordance with the Terms of Service and Privacy Policy
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-base sm:text-lg h-10 sm:h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
