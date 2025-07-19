"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function TermsSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-18">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
              Terms & Conditions
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">
            Avon Hills Resort and its affiliates (“Avon Hills Resort” or “we” or
            “us” or “our”) provide https://allsmscom.in/ as well as the other
            websites we operate (collectively, the “Website/s”) to you subject
            to these Website Terms and Conditions of Use (“Terms”), which may be
            updated by us from time to time pursuant to Section 1 herein. By
            accessing and using the Websites, you (“you” or “your”) accept and
            agree to be bound by these Terms, our Privacy Policy, and other
            Policies as applicable. If you do not agree to these Terms, you
            should not access or use the Websites. In addition, when accessing
            the Websites you shall be subject to any posted guidelines or rules
            applicable to the Websites, which may be posted and modified from
            time to time. All such guidelines or rules are hereby incorporated
            by reference into these Terms.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            These Terms do not apply to your access to and use of the products
            and services which we market for subscription on our Websites (our
            “Services”). The practices and policies, including how we protect,
            collect, and use electronic data, text, messages, communications or
            other materials submitted to and stored within the Services by you
            are detailed in and governed by our Terms of Service, or such other
            applicable agreement between you Avon Hills Resort relating to your
            access to and use of such Services.
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
                1. Changes to Terms: These Terms, or any part thereof, may be
                modified by us, including the addition or removal of terms at
                any time, and such modifications, additions or deletions will be
                effective immediately upon posting. Your use of the Websites
                after such posting will be deemed to constitute acceptance by
                you of such modifications, additions, or deletions.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                2. Changes to Websites: We may change or discontinue any aspect,
                service, or feature of the Websites at any time, including, but
                not limited to, content, availability, and equipment needed for
                access or use.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                3. Registration: You may be given the opportunity to register
                via an online registration form and to participate in
                Interactive Areas (as defined below), such as forums and other
                community features, and to create a user account with a username
                and password (or other means of authentication) (“Credentials”)
                that may allow you to receive information from us and/or to
                participate in certain features on the Websites. We will use the
                information you provide in accordance with the Privacy Notice.
                By registering you represent and warrant that all information
                that you provide is current, complete, and accurate to the best
                of your knowledge. You agree to maintain and promptly update
                your information on the Websites so that it remains current,
                complete, and accurate. You are responsible for obtaining and
                maintaining all connectivity, computer software, hardware, and
                other equipment needed for access to and use of the Websites and
                all charges related to the same. You will be responsible for the
                confidentiality and use of your Credentials and agree not to
                transfer or resell your use of or access to the Websites to any
                third party. You agree to notify Avon Hills Resort immediately
                of any unauthorized use of your Credentials or any other breach
                of security. YOU ARE ENTIRELY RESPONSIBLE FOR MAINTAINING THE
                CONFIDENTIALITY OF YOUR CREDENTIALS AND FOR ANY AND ALL
                ACTIVITIES (INCLUDING PURCHASES, AS APPLICABLE) THAT ARE
                CONDUCTED THROUGH YOUR ACCOUNT.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4. User Content Guidelines: The following terms apply to content
                submitted by you:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.1 The Websites may contain comment sections, discussion
                forums, or other interactive features (“Interactive Areas”) in
                which you may post or upload user-generated content, comments,
                videos, photos, messages, and other materials (collectively,
                “User Content”). You are solely responsible for your use of any
                Interactive Areas and you use them at your own risk. Interactive
                Areas are available for individuals aged thirteen (13) years or
                older. By submitting User Content to an Interactive Area, you
                represent that you are thirteen (13) years of age or older and,
                if you are under the age of eighteen (18) years, you either are
                an emancipated minor or have obtained the legal consent of your
                parent or legal guardian to enter into these Terms, submit
                content, and participate on the Websites.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.2 By submitting any User Content or participating in an
                Interactive Area within or in connection with the Websites, you
                agree that you will not upload, post or otherwise transmit any
                User Content that violates the Acceptable Use Policy or is
                protected by copyright, trademark, trade secret, right of
                publicity, or other proprietary right without the express
                permission of the owner of such copyright, trademark, trade
                secret, right of publicity, or other proprietary right. The
                burden of determining that any User Content is not protected by
                copyright, trademark, trade secret, right of publicity, or other
                proprietary right rests with you. You shall be solely liable for
                any damage resulting from any infringement of copyrights,
                trademarks, trade secrets, rights of publicity, or other
                proprietary rights or any other harm resulting from such a
                submission. Any person determined by Avon Hills Resort, in its
                sole discretion, to have violated the intellectual property or
                other rights of others shall be barred from submitting or
                posting any further material on the Websites.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.3 You agree not to represent or suggest, directly or
                indirectly, Avon Hills Resort’s endorsement of User Content.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.4 Any conduct that we, in our sole discretion, believe
                restricts or inhibits anyone else from using or enjoying the
                Websites will not be permitted. We reserve the right, in our
                sole discretion, to remove or edit User Content submitted by
                you.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.5 You acknowledge and agree that we are not responsible for
                the accuracy or credibility of any User Content, and do not take
                any responsibility or assume any liability for any actions you
                may take as a result of reading User Content posted on the
                Websites. Through your use of Interactive Areas, you may be
                exposed to content that you may find offensive, objectionable,
                harmful, inaccurate or deceptive. There may also be risks of
                dealing with underage persons, people acting under false
                pretence, international trade issues and foreign nationals. By
                using Interactive Areas, you assume all associated risks.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.6 We have the right, but not the obligation, to monitor User
                Content posted or uploaded to the Websites to determine
                compliance with these Terms and any operating rules established
                by us and to satisfy any law, regulation, or authorized
                government request. Although we have no obligation to monitor,
                screen, edit or remove any of the User Content posted or
                uploaded to the Websites, we reserve the right and have absolute
                discretion, to screen, edit, refuse to post or remove without
                notice any User Content posted or uploaded to the Websites at
                any time and for any reason, and you are solely responsible for
                creating backup copies of and replacing any User Content posted
                to the Websites at your sole cost and expense. The decision by
                Avon Hills Resort to monitor and/or modify User Content does not
                constitute nor shall it be deemed to constitute any
                responsibility or liability in any manner on our part in
                connection with or arising from your use of Interactive Areas on
                the Websites.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                4.7 By submitting User Content to the Websites, you
                automatically grant us a royalty-free, perpetual, irrevocable,
                non-exclusive, worldwide right and license to use, publish,
                reproduce, modify, adapt, edit, translate, create derivative
                works from, incorporate into other works, distribute, sublicense
                (through multiple tiers) and otherwise exploit such User Content
                (in whole or in part) in any form, media, or technology now
                known or hereafter developed, without payment to you or to any
                third parties. Additionally, to the fullest extent permitted
                under applicable law, you waive your moral rights in the User
                Content and agree not to assert such rights against us. You
                represent and warrant to us that you have the full legal right,
                power and authority to grant to us the license provided for
                herein, that you own or control the complete exhibition and
                other rights to the User Content you submitted for the purposes
                contemplated in this license and that neither the User Content
                nor the exercise of the rights granted herein shall violate
                these Terms, or infringe upon any rights, including the right of
                privacy or right of publicity, or constitute a libel or slander
                against, or violate any common law or any other right of, or
                cause injury to, any person or entity. You further grant to us
                the right, but not the obligation, to pursue at law any person
                or entity that violates your or our rights in the User Content
                by a breach of these Terms.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                5. Intellectual Property Rights:You acknowledge that all text,
                graphics, photographs, trademarks, logos, icons, user
                interfaces, sounds, music, videos, artwork, software, and
                computer code (collectively, “Content”), including but not
                limited to the “look and feel”, layout, design, structure,
                colour scheme, selection, combination and arrangement of the
                Content present on the Websites is/are owned by or licensed to
                us and that such Content is protected by copyright, trademark,
                trade dress and various other intellectual property and unfair
                competition laws.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Except with our express prior written permission or as permitted
                by applicable laws, you may not copy, distribute, reproduce,
                mirror, frame, publicly display, publicly perform, translate,
                create derivative works of, republish or transmit the Websites
                or Content (in whole or in part) in any way or through any
                medium for distribution, publication, or any commercial purpose.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                6. Disclaimer of Warranty; Limitation of Liability:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                (A) YOU EXPRESSLY AGREE THAT USE OF THE WEBSITES IS AT YOUR SOLE
                RISK. NEITHER Avon Hills Resort NOR ANY OF ITS EMPLOYEES,
                AGENTS, THIRD-PARTY CONTENT PROVIDERS, THIRD-PARTY SERVICE
                PROVIDERS, OR LICENSORS WARRANT THAT USE OF THE WEBSITES WILL BE
                UNINTERRUPTED OR ERROR-FREE; NOR DO THEY MAKE ANY WARRANTY AS TO
                THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITES,
                NOR AS TO THE ACCURACY, RELIABILITY OR CONTENT OF ANY
                INFORMATION, SERVICE, OR MERCHANDISE PROVIDED THROUGH THE
                WEBSITES.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                (B) THE WEBSITES ARE PROVIDED ON AN “AS IS” BASIS WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF
                MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OTHER THAN
                THOSE WARRANTIES WHICH ARE IMPLIED BY AND INCAPABLE OF
                EXCLUSION, RESTRICTION OR MODIFICATION UNDER THE LAWS APPLICABLE
                TO THESE TERMS.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                (C) TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, IN NO
                EVENT WILL Avon Hills Resort BE LIABLE TO YOU FOR ANY PERSONAL
                INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS
                OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE,
                COMPUTER AND/OR DEVICE OR TECHNOLOGY FAILURE OR MALFUNCTION OR
                FOR ANY FORM OF DIRECT OR INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES BASED ON ANY CAUSES
                OF ACTION ARISING OUT OF USE OF THE WEBSITES OR ANY ALLEGED
                FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION,
                DEFECT, OR DELAY IN SERVICE, OPERATION, OR TRANSMISSION OF THE
                WEBSITES, OR ANY ALLEGED COMPUTER VIRUS, COMMUNICATION LINE
                FAILURE, THEFT OR DESTRUCTION OF PROPERTY, AND/OR UNAUTHORIZED
                ACCESS TO, ALTERATION OF, OR USE OF OR POSTING OF ANY RECORD,
                CONTENT, OR TECHNOLOGY, PERTAINING TO OR ON THE WEBSITES. YOU
                AGREE THAT THIS LIMITATION OF LIABILITY APPLIES WHETHER SUCH
                ALLEGATIONS ARE FOR BREACH OF CONTRACT, TORTIOUS BEHAVIOR,
                NEGLIGENCE, OR FALL UNDER ANY OTHER CAUSE OF ACTION, REGARDLESS
                OF THE BASIS UPON WHICH LIABILITY IS CLAIMED AND EVEN IF Avon
                Hills Resort HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR
                DAMAGE. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, YOU
                ALSO SPECIFICALLY ACKNOWLEDGE THAT Avon Hills Resort IS NOT
                LIABLE FOR ANY ACTUAL OR ALLEGED DEFAMATORY, OFFENSIVE, OR
                ILLEGAL CONDUCT OF OTHER USERS OF THE WEBSITES OR ANY OTHER
                THIRD PARTIES.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                IF APPLICABLE LAW DOES NOT ALLOW ALL OR ANY PART OF THE ABOVE
                LIMITATION OF LIABILITY TO APPLY TO YOU, THE LIMITATIONS WILL
                APPLY TO YOU ONLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                (D) We disclaim any and all liability of any kind for any
                unauthorized access to or use of your personally identifiable
                information. By accessing the Websites, you acknowledge and
                agree to our disclaimer of any such liability. If you do not
                agree, you should not access or use the Websites.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                7. Indemnification:You agree to defend, indemnify and hold
                harmless Avon Hills Resort, its parent corporation, officers,
                directors, employees and agents, from and against any and all
                claims, damages, obligations, losses, liabilities, costs or
                debt, and expenses (including but not limited to attorney’s
                fees) arising from: (i) your use of and access to the Websites;
                (ii) your violation of any term of these Terms of Service; (iii)
                your violation of any third party right, including without
                limitation any copyright, property, or privacy right; or (iv)
                any claim that caused damage to a third party. This defense and
                indemnification obligation will survive these Terms of Service
                and your use of the Websites. Avon Hills Resort reserves the
                right to take over the exclusive defense of any claim for which
                we are entitled to indemnification under this section. In such
                event, you shall provide Avon Hills Resort with such cooperation
                as is reasonably requested by Avon Hills Resort
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                8. Termination Survival:We may terminate or suspend these Terms
                at any time without notice to you. Without limiting the
                foregoing, we shall have the right to immediately terminate your
                access to the Websites in the event of any conduct by you which
                we, in our sole discretion, consider to be unacceptable, or in
                the event of any breach by you of these Terms. The rights and
                obligations arising out of these Terms of Use, which by their
                nature should survive or are expressly so stated herein, shall
                remain in full force and effect to the extent so specified,
                notwithstanding any expiry or termination of these Terms of Use.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                9. Governing Law Venue:All disputes, claims and controversies
                arising out of or in connection with your access to, and/or use
                of the Websites, and/or the provision of content, services,
                and/or technology on or through the Websites shall be governed
                by and construed exclusively in accordance with the laws of the
                India applicable to contracts made, entered into and performed
                entirely therein, without giving effect to its conflict of laws
                provisions. If a lawsuit or court proceeding is permitted under
                these Terms, then you and Avon Hills Resort agree to submit to
                the personal and exclusive jurisdiction of the courts located in
                New Delhi, India for the purpose of litigating any dispute. YOU
                AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE
                WEBSITES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF
                ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY
                BARRED.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                10. Dispute Resolution and Arbitration:
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                10.1 Generally: In the interest of resolving disputes between
                you and Avon Hills Resort in the most expedient and
                cost-effective manner, you and Avon Hills Resort agree that,
                unless prohibited by law, every dispute arising in connection
                with these Terms will be resolved by binding arbitration. This
                agreement to arbitrate disputes includes all claims arising out
                of or relating to any aspect of these Terms, whether based on
                contract, tort, statute, fraud, misrepresentation, or any other
                legal theory and regardless of whether a claim arises during or
                after the termination of these Terms. YOU UNDERSTAND AND AGREE
                THAT, BY ENTERING INTO THESE TERMS, YOU AND Avon Hills Resort
                ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE
                IN A CLASS ACTION.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                10.2 Arbitration Rules: Any arbitration between you and All Sms
                Communications will be governed by the arbitration under the
                provisions of the Indian Arbitration and Conciliation Act, 1996
                and rules thereto and will be held in New Delhi, India by a sole
                arbitrator appointed in accordance with such rules and will be
                held in the English language.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                10.3 Enforceability: If this Section is found to be
                unenforceable, the parties agree that the exclusive jurisdiction
                and venue described herein will govern any action arising out of
                or related to these Terms.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                11. Copyrights and Copyright Agent: Avon Hills Resort and its
                Affiliates respect others’ intellectual property rights and
                expect users and customers to do the same. We reserve the right
                to terminate access to the Websites for users or customers who
                post material that infringes the intellectual property rights of
                others.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                12. Virus Protection: We make every effort to check and test our
                Website/s during production and day-to-day activities. However,
                We strongly recommend that you run an up-to-date anti-virus
                program on any file(s) downloaded any website using the internet
                and/or through any external drives. We do not guarantee that the
                content(s) available on the internet is/are free from viruses or
                other harmful components. We accept no liability whatsoever for
                any damage to your system i.e. computer, laptop, mobile, etc.
                and/or loss or corruption of data resulting from the use of our
                Website/s, including but not limited to any damage caused by
                viruses, malware, or other harmful software(s)/component(s).
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                13. Assignment: Avon Hills Resort may assign these Terms of Use
                and/or part thereof at its sole discretion, at any time, to any
                of its affiliates, group companies, holding company, subsidiary
                companies, third parties without any notice to the
                Client/Customer. However, the Client/Customer shall not assign
                these Terms of Use or any part thereof to any party without
                taking prior written consent of the Avon Hills Resort.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                14. Miscellaneous:These Terms and any operating rules for the
                Websites established by us constitute the entire agreement of
                the parties with respect to the subject matter hereof, and
                supersede all previous written or oral agreements between the
                parties with respect to such subject matter. The provisions of
                these Terms are for the benefit of Avon Hills Resort and its
                third-party content providers and licensors and each shall have
                the right to assert and enforce such provisions directly or on
                its own behalf. No waiver by either party of any breach or
                default hereunder shall be deemed to be a waiver of any
                preceding or subsequent breach or default. If any part of these
                Terms is found by a court of competent jurisdiction to be
                invalid or unenforceable, it will be replaced with language
                reflecting the original purpose in a valid and enforceable
                manner. The enforceable sections of these Terms will remain
                binding upon the parties. The section headings used herein are
                for convenience only and shall not be given any legal import.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                15. End Of Terms Of Service: If you have any questions or
                concerns regarding this Agreement, please contact us at
                avonhillsressort@gmail.com All communications or notices
                permitted or required to be given or served to the Avon Hills
                Resort under these Terms and Conditions of Use shall be in
                writing.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                These Terms were last updated on 2025.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                If More Information About The Terms and Conditions Service is
                Desired, Please Don't Hesitate To Contact The Business Team At
                avonhillsressort@gmail.com Or By Calling Direct Number +91
                7599731055, +91 7599575955.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
