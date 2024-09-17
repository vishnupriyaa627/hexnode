import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = {
    "props": {
      "pageProps": {
        "content": {
          "lang": "en",
          "header": {
            "showNotificationBanner": false,
            "languageSwitcher": {
              "img": "/assets/img/country-flags/english.png",
              "txt": "English",
              "alt": "english",
              "url": "en",
              "title": "Choose language"
            },
            "topNav": [
              {
                "type": "whatsnew-animate",
                "label": "What's new",
                "link": "/whats-new/"
              },
              {
                "type": "mini-dropdown",
                "label": "Demo",
                "class_name": "mini-dropdown",
                "dropdownCls": "mini-dropdown__data",
                "item": [
                  {
                    "label": "Request a demo",
                    "link": "https://www.hexnode.com/mobile-device-management/request-demo/"
                  },
                  {
                    "label": "Watch a demo",
                    "link": "https://www.hexnode.com/mobile-device-management/demo/"
                  }
                ]
              },
              {
                "type": "txt",
                "label": "Contact Sales",
                "link": "https://www.hexnode.com/mobile-device-management/contact-sales/callback/"
              },
              {
                "type": "txt",
                "label": "+1-833-439-6633",
                "link": "tel:+1-833-439-6633"
              },
              {
                "type": "lang_switcher",
                "class_name": "mini-dropdown",
                "dropdownCls": "mini-dropdown__data",
                "img": "/assets/img/country-flags/english.png",
                "txt": "English",
                "url": "en",
                "title": "Choose language",
                "alt": "english"
              }
            ],
            "primary_nav": {
              "logo": {
                "link": "https://www.hexnode.com/"
              },
              "nav": [
                {
                  "title": "Solutions",
                  "child": [
                    {
                      "label": "Hexnode UEM",
                      "desc": "Centralize management of mobiles, PCs and wearables in the enterprise",
                      "link": "https://www.hexnode.com/unified-endpoint-management/"
                    },
                    {
                      "label": "Hexnode Kiosk Lockdown",
                      "desc": "Lockdown devices to apps and websites for high yield and security",
                      "link": "https://www.hexnode.com/mobile-device-management/mobile-kiosk-software/"
                    },
                    {
                      "label": "Hexnode Secure Browser",
                      "desc": "Enforce definitive protection from malicious websites and online threats",
                      "link": "https://www.hexnode.com/mobile-device-management/android-kiosk-browser/"
                    },
                    {
                      "label": "Hexnode Digital Signage",
                      "desc": "The central console for managing digital signages by your organization",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-digital-signage-software/"
                    },
                    {
                      "label": "Hexnode Do",
                      "desc": "Simplify and secure remote SaaS app management",
                      "link": "https://www.hexnode.com/saas-management-platform/"
                    }
                  ]
                },
                {
                  "label": "Pricing",
                  "link": "https://www.hexnode.com/mobile-device-management/pricing/",
                  "target": "_self"
                },
                {
                  "label": "Customers",
                  "link": "https://www.hexnode.com/mobile-device-management/hexnode-mdm-customer-reviews/",
                  "target": "_self"
                },
                {
                  "title": "Partners",
                  "child": [
                    {
                      "label": "Hexnode Partner Programs",
                      "desc": "Explore every partnership program offered by Hexnode",
                      "link": "https://www.hexnode.com/hexnode-partners/"
                    },
                    {
                      "label": "Reseller Partnership",
                      "desc": "Deliver the world-class mobile \u0026 PC security solution to your clients",
                      "link": "https://www.hexnode.com/partners/"
                    },
                    {
                      "label": "MSP partnership",
                      "desc": "Help your clients scale up their endpoint management efforts",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-msp-partner-program/"
                    },
                    {
                      "label": "OEM Partnership",
                      "desc": "Integrate with Hexnode for the complete management of your devices",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-oem-partner-program/"
                    },
                    {
                      "label": "Distribution program",
                      "desc": "Venture the UEM market and grow your revenue by becoming Hexnode's official distributors",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-distributors/"
                    },
                    {
                      "label": "ISV partnership",
                      "desc": "Sell Hexnode UEM and explore the UEM market",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-isv-partner-program/"
                    },
                    {
                      "label": "Hexnode Marketplace",
                      "desc": "Checkout Hexnode's partner integrations and business tools",
                      "link": "https://www.hexnode.com/marketplace/",
                      "target": "_blank"
                    }
                  ]
                },
                {
                  "label": "Blog",
                  "link": "https://www.hexnode.com/blogs/",
                  "target": "_blank"
                },
                {
                  "title": "Contact Us",
                  "child": [
                    {
                      "label": "Talk to Sales/Support",
                      "desc": "Request a call back from the sales/tech support team",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/callback/"
                    },
                    {
                      "label": "Schedule a Demo",
                      "desc": "Request a detailed product walkthrough from the support",
                      "link": "https://www.hexnode.com/mobile-device-management/request-demo/"
                    },
                    {
                      "label": "Get a Quote",
                      "desc": "Request the pricing details of any available plans",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/get-quote/"
                    },
                    {
                      "label": "Raise a Ticket",
                      "desc": "Raise a ticket for any sales and support inquiry",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/email-us/"
                    },
                    {
                      "label": "Help Documentation",
                      "desc": "The archive of in-depth help articles, help videos and FAQs",
                      "link": "https://www.hexnode.com/mobile-device-management/help/",
                      "target": "_blank"
                    },
                    {
                      "label": "Videos",
                      "desc": "The visual guide for navigating through Hexnode",
                      "link": "https://www.hexnode.com/mobile-device-management/resources/videos/"
                    },
                    {
                      "label": "Hexnode Academy",
                      "desc": "Detailed product training videos and documents for customers and partners",
                      "link": "https://academy.hexnode.com/",
                      "target": "_blank"
                    },
                    {
                      "label": "Webinars",
                      "desc": "Product insights, feature introduction and detailed tutorial from the experts",
                      "link": "https://www.hexnode.com/events/webinars/"
                    },
                    {
                      "label": "Resources",
                      "desc": "An info-hub of datasheets, whitepapers, case studies and more",
                      "link": "https://www.hexnode.com/mobile-device-management/resources/"
                    },
                    {
                      "label": "Developers",
                      "desc": "The in-depth guide for developers on APIs and their usage",
                      "link": "https://www.hexnode.com/mobile-device-management/developers/",
                      "target": "_blank"
                    }
                  ]
                }
              ],
              "innerNav": [
                {
                  "title": "Features",
                  "type": "list_view",
                  "child": [
                    {
                      "label": "Features",
                      "group": [
                        {
                          "label": "Enrollment",
                          "link": "https://www.hexnode.com/mobile-device-management/device-enrollment/"
                        },
                        {
                          "label": "Security Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-security/"
                        },
                        {
                          "label": "Groups",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-device-groups/"
                        },
                        {
                          "label": "Policy",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-policy/"
                        },
                        {
                          "label": "Kiosk Mode",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"
                        },
                        {
                          "label": "App Management",
                          "link": "https://www.hexnode.com/mobile-device-management/app-management/"
                        },
                        {
                          "label": "Remote Control",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-remote-control/"
                        },
                        {
                          "label": "User Provisioning",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-user-provisioning/"
                        },
                        {
                          "label": "Web Filtering",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-web-filtering/"
                        },
                        {
                          "label": "Tracking",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-location-tracking/"
                        },
                        {
                          "label": "Geofencing",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-geofencing/"
                        },
                        {
                          "label": "Messenger",
                          "link": "https://www.hexnode.com/mobile-device-management/hexnode-messenger/"
                        },
                        {
                          "label": "Expense Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-expense-management/"
                        },
                        {
                          "label": "Dashboard",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-dashboard/"
                        },
                        {
                          "label": "OS Update Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-os-update-management/"
                        },
                        {
                          "label": "Hexnode Gateway",
                          "link": "https://www.hexnode.com/mobile-device-management/hexnode-gateway/"
                        },
                        {
                          "label": "Hexnode Access",
                          "link": "https://www.hexnode.com/mobile-device-management/hexnode-access/"
                        },
                        {
                          "label": "Integrations",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-integrations/"
                        },
                        {
                          "label": "Advanced Scripting",
                          "link": "https://www.hexnode.com/mobile-device-management/advanced-scripting/"
                        },
                        {
                          "label": "Reports",
                          "link": "https://www.hexnode.com/mobile-device-management/mdm-reporting/"
                        },
                        {
                          "label": "API",
                          "link": "https://www.hexnode.com/mobile-device-management/hexnode-mdm-api/"
                        },
                        {
                          "label": "All Features",
                          "link": "https://www.hexnode.com/mobile-device-management/features/"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Capabilities",
                  "type": "list_view",
                  "child": [
                    {
                      "label": "Device Management",
                      "class_name": "accordion-group-list",
                      "group": [
                        {
                          "label": "Unified Endpoint Management",
                          "link": "https://www.hexnode.com/unified-endpoint-management/"
                        },
                        {
                          "label": "Multi-platform",
                          "link": "https://www.hexnode.com/mobile-device-management/multi-platform-endpoint-management/"
                        },
                        {
                          "label": "Rugged Devices",
                          "link": "https://www.hexnode.com/mobile-device-management/rugged-device-management/"
                        },
                        {
                          "label": "Desktop Management",
                          "link": "https://www.hexnode.com/mobile-device-management/desktop-management/"
                        },
                        {
                          "label": "IoT Management",
                          "link": "https://www.hexnode.com/mobile-device-management/iot-management/"
                        },
                        {
                          "label": "Security Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-security-management/"
                        },
                        {
                          "label": "App Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-application-management/"
                        },
                        {
                          "label": "Content Management",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-content-management-solution/"
                        },
                        {
                          "label": "Bring Your Own Device",
                          "link": "https://www.hexnode.com/mobile-device-management/bring-your-own-device/"
                        },
                        {
                          "label": "Identity \u0026 Access Management",
                          "link": "https://www.hexnode.com/mobile-device-management/identity-and-access-management/"
                        }
                      ]
                    },
                    {
                      "label": "Kiosk Lockdown",
                      "class_name": "accordion-group-list",
                      "group": [
                        {
                          "label": "All-in-one Kiosk",
                          "link": "https://www.hexnode.com/mobile-device-management/mobile-kiosk-software/"
                        },
                        {
                          "label": "iOS Kiosk",
                          "link": "https://www.hexnode.com/mobile-device-management/ipad-kiosk-mode/"
                        },
                        {
                          "label": "Android Kiosk",
                          "link": "https://www.hexnode.com/mobile-device-management/android-tablet-kiosk-mode/"
                        },
                        {
                          "label": "Windows Kiosk",
                          "link": "https://www.hexnode.com/mobile-device-management/windows-kiosk-management/"
                        },
                        {
                          "label": "Apple TV Kiosk",
                          "link": "https://www.hexnode.com/mobile-device-management/apple-tv-kiosk-mode/"
                        },
                        {
                          "label": "Android Kiosk Browser",
                          "link": "https://www.hexnode.com/mobile-device-management/android-kiosk-browser/"
                        },
                        {
                          "label": "iOS Kiosk Browser",
                          "link": "https://www.hexnode.com/mobile-device-management/ios-kiosk-browser/"
                        },
                        {
                          "label": "Hexnode Digital Signage",
                          "link": "https://www.hexnode.com/mobile-device-management/hexnode-digital-signage-software/"
                        }
                      ]
                    },
                    {
                      "label": "Compliance \u0026 Security",
                      "class_name": "accordion-group-list",
                      "group": [
                        {
                          "label": "Compliance Checklists",
                          "link": "https://www.hexnode.com/mobile-device-management/compliance/"
                        },
                        {
                          "label": "GDPR",
                          "link": "https://www.hexnode.com/mobile-device-management/gdpr-compliance/"
                        },
                        {
                          "label": "SOC 2",
                          "link": "https://www.hexnode.com/mobile-device-management/soc-2-compliance/"
                        },
                        {
                          "label": "PCI DSS",
                          "link": "https://www.hexnode.com/mobile-device-management/pci-dss-compliance/"
                        },
                        {
                          "label": "HIPAA",
                          "link": "https://www.hexnode.com/mobile-device-management/hipaa-compliance/"
                        }
                      ]
                    },
                    {
                      "label": "Platforms Supported",
                      "class_name": "accordion-group-list",
                      "group": [
                        {
                          "label": "Apple",
                          "link": "https://www.hexnode.com/mobile-device-management/apple-mdm-solution/"
                        },
                        {
                          "label": "Android",
                          "link": "https://www.hexnode.com/mobile-device-management/android-mdm-solution/"
                        },
                        {
                          "label": "Mac",
                          "link": "https://www.hexnode.com/mobile-device-management/macos-device-management/"
                        },
                        {
                          "label": "Windows",
                          "link": "https://www.hexnode.com/mobile-device-management/windows-mdm/"
                        },
                        {
                          "label": "Apple TV",
                          "link": "https://www.hexnode.com/mobile-device-management/apple-tv-mdm/"
                        },
                        {
                          "label": "Android TV",
                          "link": "https://www.hexnode.com/mobile-device-management/android-tv-mdm/"
                        },
                        {
                          "label": "Fire OS",
                          "link": "https://www.hexnode.com/mobile-device-management/fire-os/"
                        }
                      ]
                    },
                    {
                      "label": "Enterprise Integrations",
                      "class_name": "accordion-group-list",
                      "group": [
                        {
                          "label": "Android Enterprise",
                          "link": "https://www.hexnode.com/mobile-device-management/android-enterprise/"
                        },
                        {
                          "label": "Apple School Manager",
                          "link": "https://www.hexnode.com/mobile-device-management/apple-school-manager/"
                        },
                        {
                          "label": "Apple Business Manager",
                          "link": "https://www.hexnode.com/mobile-device-management/apple-business-manager/"
                        },
                        {
                          "label": "Samsung Knox",
                          "link": "https://www.hexnode.com/mobile-device-management/samsung-knox/"
                        },
                        {
                          "label": "LG GATE",
                          "link": "https://www.hexnode.com/mobile-device-management/lg-gate-mdm/"
                        },
                        {
                          "label": "Kyocera",
                          "link": "https://www.hexnode.com/mobile-device-management/kyocera-mdm/"
                        },
                        {
                          "label": "Google Workspace",
                          "link": "https://www.hexnode.com/mobile-device-management/g-suite-emm/"
                        },
                        {
                          "label": "Microsoft AD",
                          "link": "https://www.hexnode.com/mobile-device-management/active-directory-integration/"
                        },
                        {
                          "label": "Okta",
                          "link": "https://www.hexnode.com/mobile-device-management/okta-integration/"
                        },
                        {
                          "label": "Microsoft Entra ID",
                          "link": "https://www.hexnode.com/mobile-device-management/microsoft-entra-id/"
                        },
                        {
                          "label": "Zendesk",
                          "link": "https://www.hexnode.com/mobile-device-management/zendesk-integration/"
                        }
                      ]
                    }
                  ]
                },
                {
                  "label": "Pricing",
                  "link": "https://www.hexnode.com/mobile-device-management/pricing/",
                  "target": "_self"
                },
                {
                  "label": "Customers",
                  "link": "https://www.hexnode.com/mobile-device-management/hexnode-mdm-customer-reviews/",
                  "target": "_self"
                },
                {
                  "title": "Partners",
                  "child": [
                    {
                      "label": "Hexnode Partner Programs",
                      "desc": "Explore every partnership program offered by Hexnode",
                      "link": "https://www.hexnode.com/hexnode-partners/"
                    },
                    {
                      "label": "Reseller Partnership",
                      "desc": "Deliver the world-class mobile \u0026 PC security solution to your clients",
                      "link": "https://www.hexnode.com/partners/"
                    },
                    {
                      "label": "MSP partnership",
                      "desc": "Help your clients scale up their endpoint management efforts",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-msp-partner-program/"
                    },
                    {
                      "label": "OEM Partnership",
                      "desc": "Integrate with Hexnode for the complete management of your devices",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-oem-partner-program/"
                    },
                    {
                      "label": "Distribution program",
                      "desc": "Venture the UEM market and grow your revenue by becoming Hexnode's official distributors",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-distributors/"
                    },
                    {
                      "label": "ISV partnership",
                      "desc": "Sell Hexnode UEM and explore the UEM market",
                      "link": "https://www.hexnode.com/mobile-device-management/hexnode-isv-partner-program/"
                    },
                    {
                      "label": "Hexnode Marketplace",
                      "desc": "Checkout Hexnode's partner integrations and business tools",
                      "link": "https://www.hexnode.com/marketplace/",
                      "target": "_blank"
                    }
                  ]
                },
                {
                  "title": "Support",
                  "child": [
                    {
                      "label": "Talk to Sales/Support",
                      "desc": "Request a call back from the sales/tech support team",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/callback/"
                    },
                    {
                      "label": "Schedule a Demo",
                      "desc": "Request a detailed product walkthrough from the support",
                      "link": "https://www.hexnode.com/mobile-device-management/request-demo/"
                    },
                    {
                      "label": "Get a Quote",
                      "desc": "Request the pricing details of any available plans",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/get-quote/"
                    },
                    {
                      "label": "Contact Hexnode Support",
                      "desc": "Raise a ticket for any sales and support inquiry",
                      "link": "https://www.hexnode.com/mobile-device-management/contact-sales/email-us/"
                    },
                    {
                      "label": "Help Documentation",
                      "desc": "The archive of in-depth help articles, help videos and FAQs",
                      "link": "https://www.hexnode.com/mobile-device-management/help/",
                      "target": "_blank"
                    },
                    {
                      "label": "Videos",
                      "desc": "The visual guide for navigating through Hexnode",
                      "link": "https://www.hexnode.com/mobile-device-management/resources/videos/"
                    },
                    {
                      "label": "Hexnode Academy",
                      "desc": "Detailed product training videos and documents for customers and partners",
                      "link": "https://academy.hexnode.com/",
                      "target": "_blank"
                    },
                    {
                      "label": "Webinars",
                      "desc": "Product insights, feature introduction and detailed tutorial from the experts",
                      "link": "https://www.hexnode.com/events/webinars/"
                    },
                    {
                      "label": "Resources",
                      "desc": "An info-hub of datasheets, whitepapers, case studies and more",
                      "link": "https://www.hexnode.com/mobile-device-management/resources/"
                    },
                    {
                      "label": "Developers",
                      "desc": "The in-depth guide for developers on APIs and their usage",
                      "link": "https://www.hexnode.com/mobile-device-management/developers/",
                      "target": "_blank"
                    },
                    {
                      "label": "Blog",
                      "desc": "Access a collection of expert-written weblogs and articles",
                      "link": "https://www.hexnode.com/blogs/",
                      "target": "_blank"
                    },
                    {
                      "label": "Forums",
                      "desc": "Connect with the Hexnode community",
                      "link": "https://www.hexnode.com/forums/",
                      "target": "_blank"
                    }
                  ]
                }
              ],
              "trialBtn": {
                "type": "link_btn",
                "label": "14 Day Free Trial",
                "link": "https://www.hexnode.com/mobile-device-management/cloud/signup/",
                "class_name": "btn-nav text-[15px] leading-[24px] text-[#fff] uppercase whitespace-nowrap min-w-[unset] min-h-[unset] rounded-[3px] p-[10px_26px] m-0 transition duration-[0.2s] ease-linear relative z-[1] hover:bg-[#bb022a] hover:text-[#fff] hover:decoration-[none] active:bg-[#bb022a] active:text-[#fff] active:decoration-[none] focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] target:decoration-[none]",
                "role": "link"
              },
              "loginBtn": {
                "type": "link",
                "label": "Login",
                "link": "https://www.hexnode.com/mobile-device-management/sign-in/",
                "class_name": "text-[16px] leading-[24px] text-[#020a19] font-medium text-center whitespace-nowrap bg-[#fff] block cursor-pointer p-[10px_30px] m-[0px_30px_10px] min-h-[48px] rounded-[3px] normal-case hover:bg-[transparent] text-[#020a19]",
                "role": "link"
              }
            },
            "notificationData": {
              "enable": true,
              "image": "https://static.hexnode.com/img/events/hexcon24/hexcon24-logo.svg",
              "alt": "HexCon24",
              "content": "HexCon is coming to NYC. Grab your tickets before they sell out!",
              "button_label": "REGISTER NOW",
              "button_link": "https://www.hexnode.com/events/hexcon24/",
              "target": "_self"
            }
          },
          "seo": {
            "canonical": "https://www.hexnode.com/mobile-device-management/android-mdm-solution/",
            "title": "Android MDM Solution | Hexnode",
            "keywords": "android mdm solution, android mdm, android mdm solutions",
            "description": "Hexnode’s Android MDM solution enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation."
          },
          "stripes": [
            {
              "layout": "heroBanner",
              "title": " Seamless Android device management at your fingertips.",
              "upperText": "A one-size-fits-all UEM for BYOD, COPE and CYOD.",
              "middleText": "Broad-ranging app and content management features.",
              "lowerText": "Remotely manage all endpoints effortlessly from one console.",
              "signup": {
                "placeholder": "Your Work Email",
                "btnLabel": "Get Started",
                "hideErrorMsgAnimation": true
              },
              "heroImageSrc": "/assets/img/android-mdm/android-work-app.png",
              "banner_logo_list": [
                {
                  "is_img_visible": true,
                  "imgSrc": "/assets/img/android-mdm/android-silver-badge.svg",
                  "alt": "Android Enterprise Silver Partner"
                }
              ]
            },
            {
              "layout": "signupMiddle",
              "title": "Start managing your Android devices",
              "placeholder": "Your Work Email",
              "btnLabel": "Get Started",
              "desc": "No credit cards required.",
              "demoLabel": "Request a demo",
              "demoLink": "https://www.hexnode.com/mobile-device-management/request-demo/"
            },
            {
              "layout": "signupBottom",
              "title": "Android management, made easy!",
              "placeholder": "Your Work Email",
              "btnLabel": "Get Started",
              "desc": "No credit cards required.",
              "demoLabel": "Request a demo",
              "demoLink": "https://www.hexnode.com/mobile-device-management/request-demo/"
            },
            {
              "layout": "gartnerForester",
              "gartnerForester": [
                {
                  "url": "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
                  "imgSrc": "/assets/img/gartner-forrester/gartner-logo.svg",
                  "alt": "gartner image",
                  "paragraph": "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022."
                },
                {
                  "url": "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
                  "imgSrc": "/assets/img/gartner-forrester/forrester.png",
                  "alt": "forrester image",
                  "paragraph": "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."
                }
              ]
            },
            {
              "layout": "features",
              "imgUrl": "/assets/img/android-mdm/android-devices.jpg",
              "imgAlt": "devices images",
              "title": "Phones, TVs and Wearables. All from a single point.",
              "description": " The Unified Endpoint Management (UEM) software from Hexnode simplifies management of all sorts of Android endpoints, ranging from mobile phones to XR devices, and unlocks countless endpoint management capabilities.",
              "accordion": [
                {
                  "id": 1,
                  "title": "Android Enterprise",
                  "innerTitle": "Simplify enterprise management",
                  "description": [
                    "Android Enterprise (AE) along with Hexnode enables the enterprise to exercise an extended level of control over every manageable aspect of a device.",
                    "Support containerization, which creates a virtual container effectively separating work-related data from everything else. Apart from securing and enhancing control over corporate data, containerization helps incorporate a sense of user privacy.",
                    "Android Enterprise provisions for a managed Google Play Store. Housed within the managed Google Play store are applications that are pre-approved by the enterprise."
                  ],
                  "imgUrl": "/assets/img/android-mdm/android-enterprise.jpg"
                },
                {
                  "id": 2,
                  "title": "Samsung Knox",
                  "innerTitle": "Build your own metaphoric fort",
                  "description": [
                    "The Knox platform is built into most Samsung phones, tablets and wearables. Hexnode along with Samsung Knox extends the granular management capabilities of the enterprise by ensuring that the device is protected throughout its lifecycle.",
                    "Samsung with Knox allows its users to enroll with Hexnode UEM through Knox Mobile Enrollment (KME). KME lets the enterprise enroll, configure and manage devices on the very first power on.",
                    "Hexnode and Knox help the enterprise unlock some device management features that are beyond the capabilities of generic devices."
                  ],
                  "imgUrl": "/assets/img/android-mdm/samsung-knox-kme.jpg"
                },
                {
                  "id": 3,
                  "title": "No-touch onboarding",
                  "innerTitle": "Get started with no hiccups",
                  "description": [
                    "Android Zero Touch Enrollment provisions for simplified large-scale enterprise device deployment.",
                    "Samsung Knox Enrollment is one among the most convenient options for the enterprise to enroll devices in bulk. Integration with Hexnode ensures deployment and configuration of Samsung devices that are completely secure from the hardware up.",
                    " Hexnode helps your organization remain as flexible as possible with a plethora of enrollment options ranging from no-touch to QR code enrollments to ensure that the users can get to work with zero time delay."
                  ],
                  "imgUrl": "/assets/img/android-mdm/zero-touch-onboarding.jpg"
                },
                {
                  "id": 4,
                  "title": "Completely remote",
                  "innerTitle": "Manage devices handsfree",
                  "description": [
                    "Support a wide range of management capabilities that can be configured on-to target devices without having to ever touch the device. Pre-configure device with corporate Wi-Fi, VPN and applications from the very first boot.",
                    "With Hexnode’s remote view and remote control capabilities, the admin can remotely view and troubleshoot supported devices.",
                    "Hexnode supports a completely cloud-based management console that can be accessed from any internet-enabled device, making remote management of the device simpler."
                  ],
                  "imgUrl": "/assets/img/android-mdm/completely-remote.jpg"
                }
              ]
            },
            {
              "layout": "ownership_structure_tabSlider",
              "title": "Explore diverse ownership setups for your Android fleet",
              "description": "",
              "tabList": [
                {
                  "title": "Device Owner",
                  "desc": "Device Owner mode in Hexnode refers to an Android Enterprise enrollment configuration designed for Corporate Owned devices, allowing IT admins to exert firm control over the devices. It provides comprehensive device management capabilities, empowering admins to customize lock screens, manage networks, apply app restrictions, and configure kiosk settings.",
                  "img": "/assets/img/android-mdm/device-owner.jpg",
                  "imgAlt": "Granular control in Company-Owned devices",
                  "height": 400
                },
                {
                  "title": "Profile Owner",
                  "desc": "Profile Owner mode in Android Enterprise facilitates device enrollment in personal devices with limited control for admins. Once enrolled, it establishes a separate work container within the device, ensuring a clear division between personal and corporate data for enhanced security and management.",
                  "img": "/assets/img/android-mdm/profile-owner.jpg",
                  "imgAlt": "Profile owner mode in Android Enterprise",
                  "height": 400,
                  "quality": 100
                },
                {
                  "title": "Work Profile on Company-Owned devices (WP-C)",
                  "desc": "Work Profile on Company-Owned (WP-C) mode leverages containerization, establishing distinct work and personal profiles to ensure privacy and security on corporate-owned devices while enabling personal usage. The employee's personal profile remains private within the containerized environment.",
                  "img": "/assets/img/android-mdm/work-profile.jpg",
                  "imgAlt": "Work Profile on Company-Owned devices",
                  "height": 400,
                  "quality": 100
                }
              ]
            },
            {
              "layout": "integration",
              "figureSrc": {
                "samsungKnox": "/assets/img/integration-partners/samsung-knox.svg",
                "kyocera": "/assets/img/integration-partners/kyocera.png",
                "lgGate": "/assets/img/integration-partners/lg-gate.png",
                "googleWorkspace": "/assets/img/integration-partners/google-workspace.svg",
                "hexnode": "/assets/img/integration-partners/logo.svg",
                "zendesk": "/assets/img/integration-partners/zendesk.svg",
                "azure": "/assets/img/integration-partners/microsoft-entra-id.svg",
                "activeDirectory": "/assets/img/integration-partners/windows-active-directory.svg",
                "android": "/assets/img/integration-partners/android.svg"
              },
              "title": "Easy integration",
              "desc": "Hexnode provides support for an ever-growing list of integrations to help you leverage the features of your pre-existing resources.",
              "preArrowUrl": "/assets/img/android-mdm/pre-arrow-icon.svg",
              "nextArrowUrl": "/assets/img/android-mdm/next-arrow-icon.svg",
              "reviews": [
                {
                  "review": "Hexnode is of great value. Works great with Android and iOS!",
                  "name": "Justin Modrak",
                  "position": "Technology Coordinator",
                  "company": "East Troy Community School District",
                  "imgUrl": "/assets/img/customer-images/justin-modrak.png"
                },
                {
                  "review": "Most complete MDM solution I found, and I tested many of them, including major names",
                  "name": "Dalibor Kruljac",
                  "position": "",
                  "company": "KAMELEYA LTD",
                  "imgUrl": "/assets/img/customer-images/dalibor-kruljac.png"
                },
                {
                  "review": "It seemed to be in-line with everything we were looking at.",
                  "name": "Tom Morrison",
                  "position": "Executive Account Manager, NCS",
                  "company": "",
                  "imgUrl": "/assets/img/customer-images/tom-morrison.png"
                }
              ]
            }
          ],
          "global": {
            "navLayout": "innerNav",
            "disablei18n": true,
            "type": null
          },
          "footer": {
            "footerTopBar": [
              {
                "img": "/static/img/footer/hexnode.svg",
                "link": "https://www.hexnode.com/",
                "type": "hexnode",
                "group": [
                  {
                    "label": "Hexnode UEM",
                    "link": "https://www.hexnode.com/unified-endpoint-management/"
                  },
                  {
                    "label": "Hexnode Kiosk Lockdown",
                    "link": "https://www.hexnode.com/mobile-device-management/mobile-kiosk-software/"
                  },
                  {
                    "label": "Hexnode Secure Browser",
                    "link": "https://www.hexnode.com/mobile-device-management/android-kiosk-browser/"
                  },
                  {
                    "label": "Hexnode Digital Signage",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-digital-signage-software/"
                  },
                  {
                    "label": "Hexnode Do",
                    "link": "https://www.hexnode.com/saas-management-platform/"
                  }
                ]
              },
              {
                "type": "product",
                "title": "PRODUCT",
                "link": "",
                "existing_user": {
                  "label": "EXISTING USERS",
                  "btn_label": "Login",
                  "btn_link": "https://www.hexnode.com/mobile-device-management/sign-in/",
                  "bsi_logo": "/assets/img/footer/bsi-logo.svg"
                },
                "group": [
                  {
                    "label": "All Features",
                    "link": "https://www.hexnode.com/mobile-device-management/features/"
                  },
                  {
                    "label": "Pricing",
                    "link": "https://www.hexnode.com/mobile-device-management/pricing/"
                  },
                  {
                    "label": "Customers",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-mdm-customer-reviews/"
                  },
                  {
                    "label": "Customer Stories",
                    "link": "https://www.hexnode.com/resources/customer-success-stories/"
                  },
                  {
                    "label": "Resources",
                    "link": "https://www.hexnode.com/mobile-device-management/resources/"
                  },
                  {
                    "label": "Webinar",
                    "link": "https://www.hexnode.com/events/webinars/"
                  },
                  {
                    "label": "Help",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/mobile-device-management/help/"
                  },
                  {
                    "label": "Academy",
                    "target": "_blank",
                    "link": "https://academy.hexnode.com/"
                  },
                  {
                    "label": "Forums",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/forums/"
                  },
                  {
                    "label": "Developers",
                    "target": "_blank",
                    "link": "https://hexnode.com/mobile-device-management/api/"
                  },
                  {
                    "label": "Marketplace",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/marketplace/"
                  },
                  {
                    "label": "Free Trial",
                    "link": "https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  },
                  {
                    "label": "What’s new",
                    "link": "https://www.hexnode.com/whats-new/",
                    "icon": "/assets/img/whats-new/icons/whats-new-star.svg"
                  }
                ]
              },
              {
                "type": "sales-and-support",
                "title": "SALES \u0026 SUPPORT",
                "group": [
                  {
                    "href": "tel:+1-833-439-6633",
                    "label": "\u003cspan\u003eUS:\u003c/span\u003e+1-833-HEXNODE (439-6633) \u003cspan\u003eToll-free\u003c/span\u003e"
                  },
                  {
                    "href": "tel:+44-8003-689920",
                    "label": "\u003cspan\u003eUK:\u003c/span\u003e+44-8003-689920 \u003cspan\u003eToll-free\u003c/span\u003e"
                  },
                  {
                    "href": "tel:+61-1800-165-939",
                    "label": "\u003cspan\u003eAU:\u003c/span\u003e+61-1800-165-939 \u003cspan\u003eToll-free\u003c/span\u003e"
                  },
                  {
                    "href": "tel:+64-9-8842599",
                    "label": "\u003cspan\u003eNZ:\u003c/span\u003e+64-9-8842599 \u003cspan\u003eDirect\u003c/span\u003e"
                  },
                  {
                    "href": "tel:+41-44-798-2244",
                    "label": "\u003cspan\u003eCH:\u003c/span\u003e+41-44-798-2244 \u003cspan\u003eDirect\u003c/span\u003e"
                  },
                  {
                    "href": "tel:+1-415-636-7555",
                    "label": "\u003cspan\u003eInternational:\u003c/span\u003e +1-415-636-7555"
                  },
                  {
                    "href": "",
                    "label": "\u003cspan\u003eFax: \u003c/span\u003e+1-415-646-4151"
                  },
                  {
                    "href": "mailto:support@hexnode.com",
                    "label": "\u003cspan\u003eSupport:\u003c/span\u003e support@hexnode.com"
                  },
                  {
                    "href": "mailto:partners@hexnode.com",
                    "label": "\u003cspan\u003ePartnership:\u003c/span\u003e partners@hexnode.com"
                  }
                ]
              },
              {
                "type": "company",
                "title": "COMPANY",
                "group": [
                  {
                    "label": "About us",
                    "link": "https://www.hexnode.com/about-us/"
                  },
                  {
                    "label": "Security",
                    "link": "https://www.hexnode.com/security-and-compliance/"
                  },
                  {
                    "label": "GDPR Compliance",
                    "link": "https://www.hexnode.com/legal/gdpr/"
                  },
                  {
                    "label": "Contact us",
                    "link": "https://www.hexnode.com/contact-us/"
                  },
                  {
                    "label": "Sitemap",
                    "link": "https://www.hexnode.com/sitemap/"
                  },
                  {
                    "label": "Blog",
                    "link": "https://www.hexnode.com/blogs/"
                  },
                  {
                    "label": "News",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/blogs/category/news/"
                  },
                  {
                    "label": "Events",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/events/"
                  },
                  {
                    "label": "Careers",
                    "target": "_blank",
                    "link": "https://mitsogo.com/careers/"
                  },
                  {
                    "label": "Legal",
                    "link": "https://www.hexnode.com/legal/"
                  }
                ]
              },
              {
                "type": "contact-us",
                "label": "CONTACT US",
                "group": [
                  {
                    "label": "Talk to Sales/Support",
                    "link": "https://www.hexnode.com/mobile-device-management/contact-sales/callback/"
                  },
                  {
                    "label": "Schedule a Demo",
                    "link": "https://www.hexnode.com/mobile-device-management/request-demo/"
                  },
                  {
                    "label": "Watch a Demo",
                    "link": "https://www.hexnode.com/mobile-device-management/demo/"
                  },
                  {
                    "label": "Get a Quote",
                    "link": "https://www.hexnode.com/mobile-device-management/contact-sales/get-quote/"
                  },
                  {
                    "label": "Raise a Ticket",
                    "link": "https://www.hexnode.com/mobile-device-management/contact-sales/email-us/"
                  },
                  {
                    "label": "Hexnode Partner Programs",
                    "link": "https://www.hexnode.com/hexnode-partners/"
                  },
                  {
                    "label": "Reseller Partnership",
                    "link": "https://www.hexnode.com/partners/"
                  },
                  {
                    "label": "OEM Partnership",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-oem-partner-program/"
                  },
                  {
                    "label": "Distribution program",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-distributors/"
                  },
                  {
                    "label": "ISV partnership",
                    "target": "_blank",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-isv-partner-program/"
                  },
                  {
                    "label": "MSP Partnership",
                    "link": "https://www.hexnode.com/mobile-device-management/hexnode-msp-partner-program/"
                  }
                ]
              },
              {
                "type": "footer-notification",
                "notify_msg": "Hexnode's annual user conference, HexCon is coming back this year, bigger, better, and in-person!\u003cbr/\u003e",
                "notify_link": "https://www.hexnode.com/events/hexcon24/",
                "notify_img": "/assets/img/footer/hexcon24-promo.svg",
                "notify_img_alt": "Hexcon24",
                "show_more": "\u003cb\u003eRegister now\u003c/b\u003e",
                "social_media": {
                  "title": "SOCIAL"
                },
                "accessibility": {
                  "facebook": "Follow company on Facebook",
                  "twitter": "Follow company on Twitter",
                  "linkedin": "Follow company on Linkedin",
                  "youtube": "Follow company on Youtube"
                },
                "existing_user": {
                  "label": "EXISTING USERS",
                  "btn_label": "Login",
                  "btn_link": "https://www.hexnode.com/mobile-device-management/sign-in/",
                  "bsi_logo": "/assets/img/footer/bsi-logo.svg"
                }
              },
              {
                "type": "capabilities",
                "title": "CAPABILITIES",
                "link": "",
                "group": [
                  {
                    "label": "Device Management",
                    "group": [
                      {
                        "label": "Unified Endpoint Management",
                        "link": "https://www.hexnode.com/unified-endpoint-management/"
                      },
                      {
                        "label": "Multi-platform Management",
                        "link": "https://www.hexnode.com/mobile-device-management/multi-platform-endpoint-management/"
                      },
                      {
                        "label": "Rugged Device Management",
                        "link": "https://www.hexnode.com/mobile-device-management/rugged-device-management/"
                      },
                      {
                        "label": "Desktop Management",
                        "link": "https://www.hexnode.com/mobile-device-management/desktop-management/"
                      },
                      {
                        "label": "IoT Management",
                        "link": "https://www.hexnode.com/mobile-device-management/iot-management/"
                      },
                      {
                        "label": "Security Management",
                        "link": "https://www.hexnode.com/mobile-device-management/mobile-security-management/"
                      },
                      {
                        "label": "App Management",
                        "link": "https://www.hexnode.com/mobile-device-management/mobile-application-management/"
                      },
                      {
                        "label": "Content Management",
                        "link": "https://www.hexnode.com/mobile-device-management/mobile-content-management-solution/"
                      },
                      {
                        "label": "App Distribution",
                        "link": "https://www.hexnode.com/mobile-device-management/distribute-app-without-app-store/"
                      },
                      {
                        "label": "Email Management",
                        "link": "https://www.hexnode.com/mobile-device-management/mobile-email-management/"
                      },
                      {
                        "label": "Bring Your Own Device",
                        "link": "https://www.hexnode.com/mobile-device-management/bring-your-own-device/"
                      },
                      {
                        "label": "Identity and Access Management",
                        "link": "https://www.hexnode.com/mobile-device-management/identity-and-access-management/"
                      }
                    ]
                  },
                  {
                    "label": "Kiosk Lockdown",
                    "group": [
                      {
                        "label": "All-in-one Kiosk",
                        "link": "https://www.hexnode.com/mobile-device-management/mobile-kiosk-software/"
                      },
                      {
                        "label": "iOS Kiosk",
                        "link": "https://www.hexnode.com/mobile-device-management/ipad-kiosk-mode/"
                      },
                      {
                        "label": "Android Kiosk",
                        "link": "https://www.hexnode.com/mobile-device-management/android-tablet-kiosk-mode/"
                      },
                      {
                        "label": "Windows Kiosk",
                        "link": "https://www.hexnode.com/mobile-device-management/windows-kiosk-management/"
                      },
                      {
                        "label": "Apple TV Kiosk",
                        "link": "https://www.hexnode.com/mobile-device-management/apple-tv-kiosk-mode/"
                      },
                      {
                        "label": "Android Kiosk Browser",
                        "link": "https://www.hexnode.com/mobile-device-management/android-kiosk-browser/"
                      },
                      {
                        "label": "iOS Kiosk Browser",
                        "link": "https://www.hexnode.com/mobile-device-management/ios-kiosk-browser/"
                      },
                      {
                        "label": "Hexnode Digital Signage",
                        "link": "https://www.hexnode.com/mobile-device-management/hexnode-digital-signage-software/"
                      }
                    ]
                  },
                  {
                    "label": "Compliance \u0026 Security",
                    "group": [
                      {
                        "label": "Compliance Checklists",
                        "link": "https://www.hexnode.com/mobile-device-management/compliance/"
                      },
                      {
                        "label": "GDPR",
                        "link": "https://www.hexnode.com/mobile-device-management/gdpr-compliance/"
                      },
                      {
                        "label": "SOC 2",
                        "link": "https://www.hexnode.com/mobile-device-management/soc-2-compliance/"
                      },
                      {
                        "label": "PCI DSS",
                        "link": "https://www.hexnode.com/mobile-device-management/pci-dss-compliance/"
                      },
                      {
                        "label": "HIPAA",
                        "link": "https://www.hexnode.com/mobile-device-management/hipaa-compliance/"
                      }
                    ]
                  },
                  {
                    "label": "Supported Platforms",
                    "group": [
                      {
                        "label": "Apple",
                        "link": "https://www.hexnode.com/mobile-device-management/apple-mdm-solution/"
                      },
                      {
                        "label": "Android",
                        "link": "https://www.hexnode.com/mobile-device-management/android-mdm-solution/"
                      },
                      {
                        "label": "Mac",
                        "link": "https://www.hexnode.com/mobile-device-management/macos-device-management/"
                      },
                      {
                        "label": "Windows",
                        "link": "https://www.hexnode.com/mobile-device-management/windows-mdm/"
                      },
                      {
                        "label": "Apple TV",
                        "link": "https://www.hexnode.com/mobile-device-management/apple-tv-mdm/"
                      },
                      {
                        "label": "Android TV",
                        "link": "https://www.hexnode.com/mobile-device-management/android-tv-mdm/"
                      },
                      {
                        "label": "Fire OS",
                        "link": "https://www.hexnode.com/mobile-device-management/fire-os/"
                      }
                    ]
                  },
                  {
                    "label": "Enterprise Integrations",
                    "group": [
                      {
                        "label": "Android Enterprise",
                        "link": "https://www.hexnode.com/mobile-device-management/android-enterprise/"
                      },
                      {
                        "label": "Apple School Manager",
                        "link": "https://www.hexnode.com/mobile-device-management/apple-school-manager/"
                      },
                      {
                        "label": "Apple Business Manager",
                        "link": "https://www.hexnode.com/mobile-device-management/apple-business-manager/"
                      },
                      {
                        "label": "Samsung Knox",
                        "link": "https://www.hexnode.com/mobile-device-management/samsung-knox/"
                      },
                      {
                        "label": "LG GATE",
                        "link": "https://www.hexnode.com/mobile-device-management/lg-gate-mdm/"
                      },
                      {
                        "label": "Kyocera",
                        "link": "https://www.hexnode.com/mobile-device-management/kyocera-mdm/"
                      },
                      {
                        "label": "Google Workspace",
                        "link": "https://www.hexnode.com/mobile-device-management/g-suite-emm/"
                      },
                      {
                        "label": "Okta",
                        "link": "https://www.hexnode.com/mobile-device-management/okta-integration/"
                      },
                      {
                        "label": "Microsoft Entra ID",
                        "link": "https://www.hexnode.com/mobile-device-management/microsoft-entra-id/"
                      },
                      {
                        "label": "Zendesk",
                        "link": "https://www.hexnode.com/mobile-device-management/zendesk-integration/"
                      },
                      {
                        "label": "Microsoft AD",
                        "link": "https://www.hexnode.com/mobile-device-management/active-directory-integration/"
                      }
                    ]
                  },
                  {
                    "label": "Industry",
                    "group": [
                      {
                        "label": "Education",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-education/"
                      },
                      {
                        "label": "Government",
                        "link": "https://www.hexnode.com/mobile-device-management/emm-for-governments/"
                      },
                      {
                        "label": "Military",
                        "link": "https://www.hexnode.com/mobile-device-management/emm-for-military-services/"
                      },
                      {
                        "label": "Airlines",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-airline-services/"
                      },
                      {
                        "label": "Banking",
                        "link": "https://www.hexnode.com/mobile-device-management/emm-for-banking-and-finance/"
                      },
                      {
                        "label": "Hospitality",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-hospitality/"
                      },
                      {
                        "label": "Logistics",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-logistics/"
                      },
                      {
                        "label": "Healthcare",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-healthcare/"
                      },
                      {
                        "label": "Automotive",
                        "link": "https://www.hexnode.com/mobile-device-management/emm-for-automotive-and-manufacturing/"
                      },
                      {
                        "label": "Retail",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-retail/"
                      },
                      {
                        "label": "Field services",
                        "link": "https://www.hexnode.com/mobile-device-management/emm-for-field-services/"
                      },
                      {
                        "label": "SMBs",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-small-business/"
                      },
                      {
                        "label": "Enterprises",
                        "link": "https://www.hexnode.com/mobile-device-management/mdm-for-enterprise/"
                      },
                      {
                        "label": "All Industries",
                        "link": "https://www.hexnode.com/mobile-device-management/industries/"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "locations",
                "title": "LOCATIONS",
                "group": [
                  {
                    "country": "San Francisco (HQ)",
                    "flag": "/assets/img/location-flag/us.png",
                    "address": [
                      "111 Pine St #1225",
                      "San Francisco,",
                      "CA 94111"
                    ]
                  },
                  {
                    "country": "Atlanta",
                    "flag": "/assets/img/location-flag/us.png",
                    "address": [
                      "1447 Peachtree St NE, Suite 310, Atlanta, GA 30309"
                    ]
                  },
                  {
                    "country": "London",
                    "flag": "/assets/img/location-flag/uk.svg",
                    "address": [
                      "46 New Broad Street London EC2M 1JH"
                    ]
                  },
                  {
                    "country": "Dubai",
                    "flag": "/assets/img/location-flag/uae.png",
                    "address": [
                      "Level 109, Arenco Tower, Plot 21,",
                      "Al Sufouh 2, Al Sufouh, Dubai, UAE"
                    ]
                  },
                  {
                    "country": "Kochi",
                    "flag": "/assets/img/location-flag/india.svg",
                    "address": [
                      "5th Floor, Jyothirmaya,",
                      "Infopark Phase 2",
                      "Kochi, Kerala – 682303"
                    ]
                  },
                  {
                    "country": "Chennai",
                    "flag": "/assets/img/location-flag/india.svg",
                    "address": [
                      "9th Floor, DLF IT Park Block 1B,",
                      "Mount Poonamallee Road,",
                      "Manapakkam, Chennai,",
                      "Tamil Nadu 600089"
                    ]
                  },
                  {
                    "country": "Bangalore",
                    "flag": "/assets/img/location-flag/india.svg",
                    "address": [
                      "Laurel B -Block, 1st Floor, Bagmane",
                      " Tech Park, C.V. Raman Nagar,",
                      "Bangalore, Karnataka 560093"]
                  }
                ]
              }
            ],
            "company_location": [
            ],
            "footerBottomBar": {
              "language_data": {
                "img": "/assets/img/country-flags/english.png",
                "txt": "English",
                "url": "en",
                "title": "Choose language",
                "alt": "english"
              },
              "policy_detail": [
                {
                  "label": "Terms of Use",
                  "link": "https://www.hexnode.com/legal/terms-of-use/"
                },
                {
                  "label": "Privacy",
                  "link": "https://www.hexnode.com/legal/privacy-policy/"
                },
                {
                  "label": "Cookies",
                  "link": "https://www.hexnode.com/legal/cookies-policy/"
                }
              ],
              "copy_right": "Copyright © 2024 Mitsogo Inc. All Rights Reserved."
            },
            "cookieBanner": {
              "cookieMessage": "This website uses cookies. By continuing to browse this website, you are agreeing to our use of cookies. See our",
              "cookiePolicy": "Cookies policy",
              "moreInfo": "for more information.",
              "buttonText": "I Accept"
            },
            "exitPopUp": {
              "title": "Get a free Hexnode UEM demo",
              "content": "We'll personalize this session so you can gain deeper insights and get started quickly.",
              "buttonText": "Schedule DEMO",
              "url": "https://www.hexnode.com/mobile-device-management/request-demo/"
            }
          }
        },
        "blurData": {
          "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAYAAACk7+45AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGPQ0tH7IyIq/oNBQUH1n69/8F+GS+fP/3/+4sVvBl8/vy9OTk4fAAiUELxbomH3AAAAAElFTkSuQmCC",
          "svg": [
            "svg",
            {
              "xmlns": "http://www.w3.org/2000/svg",
              "width": "100%",
              "height": "100%",
              "shapeRendering": "crispEdges",
              "preserveAspectRatio": "none",
              "viewBox": "0 0 2 4",
              "style": {
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "transformOrigin": "top left",
                "transform": "translate(-50%, -50%)",
                "right": 0,
                "bottom": 0
              }
            },
            [
              [
                "rect",
                {
                  "fill": "rgb(211,213,215)",
                  "fill-opacity": 0.988,
                  "width": 1,
                  "height": 1,
                  "x": 0,
                  "y": 0
                }
              ],
              ["rect",
                {
                  "fill": "rgb(208,209,211)",
                  "fill-opacity": 0.973,
                  "width": 1,
                  "height": 1,
                  "x": 1,
                  "y": 0
                }
              ],
              [
                "rect",
                {
                  "fill": "rgb(211,210,218)",
                  "fill-opacity": 0.996,
                  "width": 1,
                  "height": 1,
                  "x": 0,
                  "y": 1
                }
              ],
              [
                "rect",
                {
                  "fill": "rgb(216,218,223)",
                  "fill-opacity": 0.992,
                  "width": 1,
                  "height": 1,
                  "x": 1,
                  "y": 1
                }
              ],
              [
                "rect",
                {
                  "fill": "rgb(238,234,234)",
                  "fill-opacity": 1,
                  "width": 1,
                  "height": 1,
                  "x": 0,
                  "y": 2
                }
              ],
              [
                "rect",
                {
                  "fill": "rgb(237,238,238)",
                  "fill-opacity": 0.984,
                  "width": 1,
                  "height": 1,
                  "x": 1,
                  "y": 2
                }],
              [
                "rect",
                {
                  "fill": "rgb(217,218,218)",
                  "fill-opacity": 0.957,
                  "width": 1,
                  "height": 1,
                  "x": 0,
                  "y": 3
                }
              ],
              ["rect",
                {
                  "fill": "rgb(216,216,216)",
                  "fill-opacity": 0.941,
                  "width": 1,
                  "height": 1,
                  "x": 1,
                  "y": 3
                }
              ]
            ]
          ]
        }
      },
      "__N_SSG": true
    },
    "page": "/mobile-device-management/android-mdm-solution",
    "query": {
    },
    "buildId": "Rw1dToolsvOOL5t6GE4LE",
    "assetPrefix": "https://static.hexnode.com/v2",
    "isFallback": false,
    "dynamicIds": [
      3187,
      4660,
      1482,
      3286,
      21,
      9434,
      1252,
      1506,
      7258,
      261
    ],
    "gsp": true,
    "locale": "en",
    "locales": [
      "en",
      "fr",
      "de",
      "es",
      "pl",
      "ru",
      "sv",
      "da",
      "nl",
      "it",
      "tr",
      "ja",
      "pt-br",
      "ko",
      "pt",
      "zh"
    ],
    "defaultLocale": "en",
    "scriptLoader": [
    ]

  };

  constructor() { }

  getData() {
    return this.data;
  }
}
