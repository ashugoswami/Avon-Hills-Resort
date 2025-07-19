"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function PrivacySection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-18">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
              Privacy Policy
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">
            This policy (“Privacy Policy”) applies to Avon Hills Resort and all
            its subsidiaries and/or branch offices in India. It provides the
            practices and policies applicable to Avon Hills Resort (including
            its employees, interns, contractors, consultants, clients, customers
            or any other party directly or indirectly engaged for business or
            otherwise) for handling or dealing in Personal Information,
            including Sensitive Personal Data or Information (as defined below)
            that is lawfully collected by Avon Hills Resort, with this referred
            to as Avon Hills Resort. We collect personal data of our employees,
            potential employees, clients, suppliers, business contacts,
            shareholders and website users or any other individual or entities
            wherever required for business purposes or otherwise.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Avon Hills Resort attaches great importance to your right to privacy
            and the protection of your data. We want you to feel secure that
            when you deal with Avon Hills Resort, your personal data are in good
            hands.
          </p>
          <Button
            type="submit"
            size="lg"
            className="w-100 bg-[#1B4332] hover:bg-[#2D6A4F] text-base sm:text-lg h-10 sm:h-12 mt-4 mb-4"
            onClick={() => setIsSubmitting(!isSubmitting)}
          >
            {isSubmitting ? "Show Less..." : "Show More.."}
          </Button>
          {isSubmitting && (
            <>
              <p className="text-lg sm:text-xl text-gray-600">
                Avon Hills Resort protects your personal data following
                applicable laws and our data privacy policies. In addition, All
                Sms Communications maintains the appropriate technical and
                organizational measures to protect your personal data against
                unauthorized or unlawful processing and/or against accidental
                loss, alteration, discio-sure or access, or accidental or
                unlawful destruction of or damage thereto.
              </p>
              <p className="text-lg sm:text-xl text-black-900 mt-4">
                General Definitions
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Reference to you or your in this Privacy Policy refers to any
                natural person (including the employees of All Sms
                Communications) who provides to Sma mation referred to in
                Appendix 1 of this document.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Act shall mean the Information Technology Act, 2000 and Rules
                thereunder as amended from time to time.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Information shall mean and include Personal Information and
                Sensitive Personal Data and Information as may be collected by
                Avon Hills Resort.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Personal Information (PI) shall have the same meaning as under
                Rule 2 (i) of the Information Technology (Reasonable security
                practices a sensitive personal data or information) Rules, 2011
                as amended from time to time. For ease of reference Rule 2 () of
                the Information Tech security practices and procedures and
                sensitive personal data or information) Rules. 2011 is
                re-produced under Appendix 1.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Rules shall mean the Information Technology (Reasonable security
                practices and procedures and sensitive personal data or
                information) F amended from time to time.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Registered User shall mean such user whose registration is
                accepted by Avon Hills Resort.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Sensitive Personal Data and Information (SPDI) shall mean and
                include information under Rule 3 of the Information Technology
                (Reasonable security practices and procedures and sensitive
                personal data or information) Rules, 2011 as amended from time
                to time. For ease of reference Rule 3 of the Information
                Technology (Reasonable security practices and procedures and
                sensitive personal data or information) Rules, 2011 is
                re-produced under Schedule 1.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                All words and expressions used and not defined in this document
                but defined in the Act or the Rules shall have the meanings
                respectively assigned to them in the Act or the Rules.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Avon Hills Resort is fully committed to respecting your privacy
                and shall ensure that your Information is safe. This privacy
                policy sets out the practices adopted in respect of Information,
                including the types of Information that is collected, how the
                information is collected, how the Information is used, how long
                the Information is retained and with whom it is shared (Privacy
                Policy). This Privacy Policy is published in compliance with the
                provisions of the Act and the Rules made thereunder that require
                publishing the privacy policy on the All Sms Communications
                website.
              </p>
              <p className="text-lg sm:text-xl text-black-900 mt-4">
                Collection and Use of Information:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                1. Information Collection and Use
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                We collect various types of information to provide and improve
                our services to you.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                1.1 Information You Provide
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Account Information: When you create an account, we collect
                personal information such as your name, email address, phone
                number, and billing details. This information is encrypted and
                stored in a secured digital storage.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Contact Information: When you upload or provide phone numbers
                and other contact details for sending SMS or voice messages, we
                store this information securely in encrypted form.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                1.2 Information We Collect Automatically
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Log Data: We collect log data, including the dates and times of
                access to our service, message delivery status, and response
                logs.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                2. How We Use Your Information We use your information for
                several reasons, including:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Provide the Services: We use your information to fulfill your
                requests, process your transactions, and deliver the services
                you use.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Communicate with You: We may use your information to respond
                to your inquiries, provide customer service support, send you
                important information about the services, and send you marketing
                communications (with your consent) via different channels,
                including but not limited to SMS, Email, WhatsApp, and Voice.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Personalize Your Experience: We may use your information to
                personalize your experience with the services, such as tailoring
                content and recommendations to your interests.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Improve Our Services: We may use your information to improve
                the functionality, performance, and security of the services.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Comply with Legal Obligations: We may use your information to
                comply with applicable laws and regulations.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                3. Your Choices We respect your right to control your
                information. You can choose:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Opt Out of Marketing Communications: You can unsubscribe from
                our marketing emails by clicking the “unsubscribe” link at the
                bottom of any marketing email you receive from us.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                To Access and Update Your Information: You can access and update
                your information through your account settings on the services.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4. Data Retention
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                We will retain your information for as long as necessary to
                provide the services, comply with our legal obligations, resolve
                disputes, and enforce our agreements.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                5. Security
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                We take reasonable steps to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
                However, no internet transmission or electronic storage is
                completely secure. We implement industry-standard security
                measures to safeguard your data.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                6. Changes to this Privacy Policy
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                If you have any questions about this Privacy Policy, please
                contact us at avonhillsressort@gmail.com
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
