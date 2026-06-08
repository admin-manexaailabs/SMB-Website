import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { 
  ArrowLeft,
  Users,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Bot,
  Calendar,
  ShoppingBag,
  TrendingUp,
  Clock,
  Zap,
  CheckCircle2,
  Workflow,
  ArrowRight,
  BarChart3,
  Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();

  // Case study data
  const caseStudyData: { [key: string]: any } = {
    'urban-bites-restaurant': {
      industry: 'Restaurants',
      businessName: 'Urban Bites',
      businessSize: '2 locations, 18 staff',
      color: '#F2994A',
      
      snapshot: {
        channels: ['WhatsApp', 'Web', 'Phone'],
        agents: ['Booking Agent', 'Support Agent'],
        metrics: [
          { label: 'Time Saved', value: '18 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 2 seconds', icon: Zap },
          { label: 'Volume Handled', value: '450 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Phone lines constantly busy during peak hours',
        'Staff spending 3+ hours daily on booking calls',
        'Missed reservations due to manual entry errors',
        'No way to handle WhatsApp inquiries efficiently'
      ],

      flow: {
        title: 'Reservation Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer messages via WhatsApp, Web, or Phone',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Booking agent checks availability in real-time',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Creates booking, sends confirmation, adds to calendar',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: 'Reservation complete in < 2 minutes, zero staff touch',
            icon: Target,
            color: '#F2994A'
          }
        ]
      },

      channelsInAction: [
        { channel: 'WhatsApp', handled: 'Instant booking confirmations, menu questions', why: '68% of customers prefer messaging over calls' },
        { channel: 'Web', handled: 'Direct reservations from website widget', why: 'Works 24/7, no human needed' },
        { channel: 'Phone', handled: 'Voice agent handles overflow during peak times', why: 'Backup for customers who still prefer calling' }
      ],

      results: [
        { metric: '90%', description: 'Reservations automated', icon: BarChart3 },
        { metric: '18 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 2 sec', description: 'Average response time', icon: Zap },
        { metric: '450+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '0', description: 'Booking errors', icon: CheckCircle2 },
        { metric: '3×', description: 'More reservations during peak', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Flow Builder', 
          reason: 'Created custom reservation logic without coding',
          icon: Workflow
        },
        { 
          feature: 'Unified Inbox', 
          reason: 'All channels funnel into one interface for edge cases',
          icon: MessageSquare
        },
        { 
          feature: 'Templates', 
          reason: 'Started with restaurant booking template, customized in 2 hours',
          icon: Calendar
        },
        { 
          feature: 'Real-time Sync', 
          reason: 'Connected to existing booking system via API',
          icon: Zap
        }
      ],

      templateUsed: 'Restaurant Reservation Agent'
    },

    'luxe-salon-bookings': {
      industry: 'Salons & Spas',
      businessName: 'Luxe Salon',
      businessSize: '1 location, 8 staff',
      color: '#9B51E0',
      
      snapshot: {
        channels: ['SMS', 'Web', 'Instagram'],
        agents: ['Booking Agent', 'Reminder Agent', 'Support Agent'],
        metrics: [
          { label: 'Time Saved', value: '22 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 3 seconds', icon: Zap },
          { label: 'Volume Handled', value: '280 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        '25% no-show rate costing thousands monthly',
        'Stylists manually managing their own bookings',
        'Instagram DMs piling up with booking requests',
        'No automated reminder system in place'
      ],

      flow: {
        title: 'Booking + Reminder Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer books via SMS, Web, or Instagram DM',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Checks stylist availability, suggests alternatives',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Books appointment, schedules auto-reminders (24h & 2h before)',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: 'Zero missed appointments, 95% booking rate',
            icon: Target,
            color: '#9B51E0'
          }
        ]
      },

      channelsInAction: [
        { channel: 'SMS', handled: 'Automated reminders and confirmations', why: '98% open rate on SMS reminders' },
        { channel: 'Web', handled: 'Real-time availability calendar', why: 'Customers can self-book 24/7' },
        { channel: 'Instagram', handled: 'DM booking flow with service selection', why: 'Where their customers already are' }
      ],

      results: [
        { metric: '0', description: 'Missed appointments', icon: CheckCircle2 },
        { metric: '95%', description: 'Booking conversion rate', icon: BarChart3 },
        { metric: '22 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 3 sec', description: 'Average response time', icon: Zap },
        { metric: '280+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '75%', description: 'Reduction in no-shows', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Multi-Agent Setup', 
          reason: 'Booking agent + Reminder agent work together automatically',
          icon: Bot
        },
        { 
          feature: 'Channel Flexibility', 
          reason: 'Same agent handles SMS, Web, and Instagram with consistent logic',
          icon: MessageCircle
        },
        { 
          feature: 'Smart Scheduling', 
          reason: 'Built-in calendar integration prevents double-bookings',
          icon: Calendar
        },
        { 
          feature: 'Templates', 
          reason: 'Used salon template with pre-built reminder sequences',
          icon: Workflow
        }
      ],

      templateUsed: 'Salon Booking & Reminders'
    },

    'city-health-clinic': {
      industry: 'Healthcare',
      businessName: 'City Health Clinic',
      businessSize: '3 locations, 45 staff',
      color: '#2F80ED',
      
      snapshot: {
        channels: ['SMS', 'Email', 'Phone'],
        agents: ['Appointment Agent', 'Reminder Agent', 'Follow-up Agent'],
        metrics: [
          { label: 'Time Saved', value: '30 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 5 seconds', icon: Zap },
          { label: 'Volume Handled', value: '620 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        '40% no-show rate impacting clinic operations',
        'Front desk overwhelmed with appointment calls',
        'No automated patient follow-up after visits',
        'Manual coordination across 3 locations'
      ],

      flow: {
        title: 'Patient Appointment Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Patient requests appointment via SMS, Email, or Phone',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Checks availability across all locations, suggests nearest slot',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Books appointment, sends reminders, triggers follow-up after visit',
            icon: CheckCircle2,
            color: '#2F80ED'
          },
          { 
            label: 'Outcome', 
            description: '60% reduction in no-shows, automated patient engagement',
            icon: Target,
            color: '#2F80ED'
          }
        ]
      },

      channelsInAction: [
        { channel: 'SMS', handled: 'Appointment reminders and confirmations', why: 'HIPAA-compliant, instant delivery' },
        { channel: 'Email', handled: 'Detailed appointment info and follow-up surveys', why: 'Better for longer communications' },
        { channel: 'Phone', handled: 'Voice agent for patients who prefer calling', why: 'Accessibility for all patient demographics' }
      ],

      results: [
        { metric: '60%', description: 'Reduction in no-shows', icon: ArrowRight },
        { metric: '30 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 5 sec', description: 'Average response time', icon: Zap },
        { metric: '620+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '100%', description: 'Follow-up rate', icon: CheckCircle2 },
        { metric: '3×', description: 'More appointment capacity', icon: BarChart3 }
      ],

      whyItWorked: [
        { 
          feature: 'Multi-Location Logic', 
          reason: 'Single flow handles scheduling across all 3 clinic locations',
          icon: Workflow
        },
        { 
          feature: 'Automated Follow-ups', 
          reason: 'Post-visit surveys and care reminders sent automatically',
          icon: Calendar
        },
        { 
          feature: 'HIPAA Compliance', 
          reason: 'Secure, compliant messaging across all channels',
          icon: CheckCircle2
        },
        { 
          feature: 'Voice + Text', 
          reason: 'Serves all patient preferences without adding staff',
          icon: Phone
        }
      ],

      templateUsed: 'Healthcare Appointment System'
    },

    'artisan-collective-ecommerce': {
      industry: 'E-commerce',
      businessName: 'Artisan Collective',
      businessSize: 'Online store, 6 staff',
      color: '#EB5757',
      
      snapshot: {
        channels: ['WhatsApp', 'Email', 'Web'],
        agents: ['Order Agent', 'Support Agent', 'Follow-up Agent'],
        metrics: [
          { label: 'Time Saved', value: '35 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 2 seconds', icon: Zap },
          { label: 'Volume Handled', value: '890 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Customer support couldn\'t keep up with order inquiries',
        'No automated post-purchase follow-up',
        'WhatsApp messages going unanswered for hours',
        'Manual order status updates via email'
      ],

      flow: {
        title: 'Order + Support Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer inquires about order via WhatsApp, Email, or Web',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Looks up order, provides real-time status, suggests products',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Updates customer, schedules follow-up, offers related products',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: '3× more follow-ups, 40% increase in repeat purchases',
            icon: Target,
            color: '#EB5757'
          }
        ]
      },

      channelsInAction: [
        { channel: 'WhatsApp', handled: 'Order tracking and quick support queries', why: 'Customers expect instant responses' },
        { channel: 'Email', handled: 'Detailed product recommendations and follow-ups', why: 'Better for marketing and rich content' },
        { channel: 'Web', handled: 'Live chat support on product pages', why: 'Reduces cart abandonment' }
      ],

      results: [
        { metric: '3×', description: 'More follow-ups sent', icon: ArrowRight },
        { metric: '40%', description: 'Increase in repeat purchases', icon: BarChart3 },
        { metric: '35 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 2 sec', description: 'Average response time', icon: Zap },
        { metric: '890+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '85%', description: 'Support queries resolved instantly', icon: CheckCircle2 }
      ],

      whyItWorked: [
        { 
          feature: 'Order Integration', 
          reason: 'Connected to Shopify, real-time order status lookups',
          icon: ShoppingBag
        },
        { 
          feature: 'Smart Follow-ups', 
          reason: 'Automated post-purchase sequences based on product type',
          icon: Calendar
        },
        { 
          feature: 'Cross-selling Logic', 
          reason: 'Agent suggests related products based on order history',
          icon: TrendingUp
        },
        { 
          feature: 'Multi-Channel Sync', 
          reason: 'Same conversation continues across WhatsApp, Email, Web',
          icon: MessageCircle
        }
      ],

      templateUsed: 'E-commerce Order Management'
    },

    'elite-plumbing-service': {
      industry: 'Services & SMBs',
      businessName: 'Elite Plumbing',
      businessSize: 'Local service, 12 staff',
      color: '#10B981',
      
      snapshot: {
        channels: ['Phone', 'Web', 'SMS'],
        agents: ['Lead Capture Agent', 'Booking Agent', 'Support Agent'],
        metrics: [
          { label: 'Time Saved', value: '25 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 1 second', icon: Zap },
          { label: 'Volume Handled', value: '340 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Missing emergency calls after hours',
        'No way to qualify leads before dispatching technicians',
        'Manual back-and-forth to schedule appointments',
        'Lost leads due to slow response times'
      ],

      flow: {
        title: 'Lead Capture + Booking Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer calls, texts, or submits web form',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Qualifies urgency, collects details, checks availability',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Books technician, sends confirmation, adds to dispatch system',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: '85% conversion rate, zero missed opportunities',
            icon: Target,
            color: '#10B981'
          }
        ]
      },

      channelsInAction: [
        { channel: 'Phone', handled: 'Voice agent answers calls 24/7, even during emergencies', why: 'Never miss an emergency call again' },
        { channel: 'Web', handled: 'Lead form → instant quote → booking in one flow', why: 'Converts web visitors instantly' },
        { channel: 'SMS', handled: 'Booking confirmations and technician ETA updates', why: 'Keeps customers informed automatically' }
      ],

      results: [
        { metric: '85%', description: 'Lead conversion rate', icon: BarChart3 },
        { metric: '0', description: 'Missed emergency calls', icon: CheckCircle2 },
        { metric: '25 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 1 sec', description: 'Average response time', icon: Zap },
        { metric: '340+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '24/7', description: 'Availability without staff', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Voice Agent', 
          reason: 'Handles phone calls like a real dispatcher, qualifies urgency',
          icon: Phone
        },
        { 
          feature: 'Lead Qualification', 
          reason: 'Collects all necessary info before dispatching technicians',
          icon: Target
        },
        { 
          feature: 'Real-time Dispatch', 
          reason: 'Integrates with scheduling software, auto-assigns technicians',
          icon: Calendar
        },
        { 
          feature: '24/7 Operation', 
          reason: 'Never sleeps, handles emergencies anytime',
          icon: Clock
        }
      ],

      templateUsed: 'Service Business Lead Capture'
    },

    'spice-kitchen-orders': {
      industry: 'Restaurants',
      businessName: 'Spice Kitchen',
      businessSize: '1 location, 15 staff',
      color: '#F2994A',
      
      snapshot: {
        channels: ['WhatsApp', 'Phone', 'Web'],
        agents: ['Order Agent', 'Support Agent', 'Tracking Agent'],
        metrics: [
          { label: 'Time Saved', value: '28 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 3 seconds', icon: Zap },
          { label: 'Volume Handled', value: '670 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Phone orders causing kitchen delays during peak hours',
        'Staff couldn\'t handle 2× order volume growth',
        'No automated order tracking for delivery',
        'Manual order entry causing errors'
      ],

      flow: {
        title: 'Order + Delivery Tracking Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer places order via WhatsApp, Phone, or Web',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Takes order, confirms items, calculates delivery time',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Sends to kitchen, provides tracking link, sends delivery updates',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: '2× order capacity with same staff, zero order errors',
            icon: Target,
            color: '#F2994A'
          }
        ]
      },

      channelsInAction: [
        { channel: 'WhatsApp', handled: 'Order placement and real-time tracking updates', why: 'Most customers already on WhatsApp' },
        { channel: 'Phone', handled: 'Voice agent takes orders during peak times', why: 'Handles overflow without staff' },
        { channel: 'Web', handled: 'Online ordering with menu customization', why: 'Preferred by regulars, higher accuracy' }
      ],

      results: [
        { metric: '2×', description: 'Order volume handled', icon: TrendingUp },
        { metric: '0', description: 'Order entry errors', icon: CheckCircle2 },
        { metric: '28 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 3 sec', description: 'Average response time', icon: Zap },
        { metric: '670+', description: 'Messages handled daily', icon: BarChart3 },
        { metric: '95%', description: 'Customer satisfaction', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Order Automation', 
          reason: 'Direct integration with POS system, no manual entry',
          icon: ShoppingBag
        },
        { 
          feature: 'Real-time Tracking', 
          reason: 'Customers get automatic updates at each stage',
          icon: TrendingUp
        },
        { 
          feature: 'Voice + Messaging', 
          reason: 'Handles both channels with same order logic',
          icon: Phone
        },
        { 
          feature: 'Peak Hour Handling', 
          reason: 'Never misses an order during busy times',
          icon: Zap
        }
      ],

      templateUsed: 'Restaurant Order Management'
    },

    'wellness-center-multi': {
      industry: 'Healthcare',
      businessName: 'Wellness Center',
      businessSize: '1 location, 5 specialists',
      color: '#2F80ED',
      
      snapshot: {
        channels: ['Web', 'Phone', 'Email'],
        agents: ['Booking Agent', 'Reminder Agent', 'Support Agent'],
        metrics: [
          { label: 'Time Saved', value: '24 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 4 seconds', icon: Zap },
          { label: 'Volume Handled', value: '420 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Coordinating appointments across 5 different specialists',
        'Double-bookings causing scheduling conflicts',
        'Patients confused about which specialist to book',
        'Manual calendar management for each provider'
      ],

      flow: {
        title: 'Multi-Specialist Booking Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Patient requests appointment via Web, Phone, or Email',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Identifies needed specialist, checks all provider calendars',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Books with right specialist, sends reminders, syncs all calendars',
            icon: CheckCircle2,
            color: '#2F80ED'
          },
          { 
            label: 'Outcome', 
            description: 'Zero scheduling conflicts, unified booking across all services',
            icon: Target,
            color: '#2F80ED'
          }
        ]
      },

      channelsInAction: [
        { channel: 'Web', handled: 'Self-service booking with specialist selection', why: 'Patients can see all availability at once' },
        { channel: 'Phone', handled: 'Voice agent guides to right specialist', why: 'Helpful for complex cases needing triage' },
        { channel: 'Email', handled: 'Detailed appointment info and pre-visit forms', why: 'Better for longer instructions' }
      ],

      results: [
        { metric: '0', description: 'Scheduling conflicts', icon: CheckCircle2 },
        { metric: '100%', description: 'Calendar accuracy', icon: BarChart3 },
        { metric: '24 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 4 sec', description: 'Average response time', icon: Zap },
        { metric: '420+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '5', description: 'Specialists coordinated', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Multi-Provider Logic', 
          reason: 'Single flow manages 5 separate calendars with conflict prevention',
          icon: Calendar
        },
        { 
          feature: 'Smart Routing', 
          reason: 'Directs patients to correct specialist based on needs',
          icon: Target
        },
        { 
          feature: 'Real-time Sync', 
          reason: 'All calendars update instantly across all channels',
          icon: Zap
        },
        { 
          feature: 'Template Start', 
          reason: 'Healthcare template adapted for multi-provider setup',
          icon: Workflow
        }
      ],

      templateUsed: 'Multi-Provider Healthcare'
    },

    'tech-gadgets-support': {
      industry: 'E-commerce',
      businessName: 'Tech Gadgets Plus',
      businessSize: 'Online store, 8 staff',
      color: '#EB5757',
      
      snapshot: {
        channels: ['WhatsApp', 'Email', 'Web'],
        agents: ['Support Agent', 'Returns Agent', 'Follow-up Agent'],
        metrics: [
          { label: 'Time Saved', value: '42 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 2 seconds', icon: Zap },
          { label: 'Volume Handled', value: '1200 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Support tickets taking 24+ hours to respond',
        'Return process requiring multiple email exchanges',
        'Technical questions going unanswered',
        'Staff overwhelmed with repetitive inquiries'
      ],

      flow: {
        title: 'Support + Returns Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer asks question or initiates return via any channel',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Checks order history, product specs, return eligibility',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Answers question or processes return, sends return label',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: '70% of tickets resolved instantly, automated returns',
            icon: Target,
            color: '#EB5757'
          }
        ]
      },

      channelsInAction: [
        { channel: 'WhatsApp', handled: 'Quick product questions and order status', why: 'Fastest way to help customers' },
        { channel: 'Email', handled: 'Detailed tech support and return confirmations', why: 'Better for complex technical issues' },
        { channel: 'Web', handled: 'Live support chat with product-specific help', why: 'Reduces support tickets proactively' }
      ],

      results: [
        { metric: '70%', description: 'Tickets resolved instantly', icon: CheckCircle2 },
        { metric: '90%', description: 'Reduction in response time', icon: Zap },
        { metric: '42 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '< 2 sec', description: 'Average response time', icon: TrendingUp },
        { metric: '1200+', description: 'Messages handled daily', icon: BarChart3 },
        { metric: '100%', description: 'Return automation rate', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Knowledge Base Integration', 
          reason: 'Agent pulls from product docs to answer technical questions',
          icon: Bot
        },
        { 
          feature: 'Return Automation', 
          reason: 'Checks eligibility, generates labels, processes refunds automatically',
          icon: ShoppingBag
        },
        { 
          feature: 'Order Context', 
          reason: 'Knows customer\'s purchase history for personalized support',
          icon: TrendingUp
        },
        { 
          feature: 'Escalation Logic', 
          reason: 'Complex issues route to human agents automatically',
          icon: ArrowRight
        }
      ],

      templateUsed: 'E-commerce Customer Support'
    },

    'pro-cleaners-quotes': {
      industry: 'Services & SMBs',
      businessName: 'Pro Cleaners',
      businessSize: 'Local service, 10 staff',
      color: '#10B981',
      
      snapshot: {
        channels: ['SMS', 'Web', 'Phone'],
        agents: ['Quote Agent', 'Booking Agent', 'Reminder Agent'],
        metrics: [
          { label: 'Time Saved', value: '20 hrs/week', icon: Clock },
          { label: 'Response Speed', value: '< 1 second', icon: Zap },
          { label: 'Volume Handled', value: '380 msgs/day', icon: TrendingUp }
        ]
      },

      problems: [
        'Manual quote generation taking hours per lead',
        'Lost leads waiting for pricing information',
        'Back-and-forth scheduling calls wasting time',
        'No way to handle after-hours inquiries'
      ],

      flow: {
        title: 'Quote + Booking Flow',
        steps: [
          { 
            label: 'Entry', 
            description: 'Customer requests quote via SMS, Web, or Phone',
            icon: MessageCircle,
            color: '#10B981'
          },
          { 
            label: 'Agent Logic', 
            description: 'Asks key questions, calculates quote based on service type',
            icon: Bot,
            color: '#2F80ED'
          },
          { 
            label: 'Actions', 
            description: 'Provides instant quote, offers booking, sends confirmation',
            icon: CheckCircle2,
            color: '#9B51E0'
          },
          { 
            label: 'Outcome', 
            description: '92% booking conversion, instant quotes 24/7',
            icon: Target,
            color: '#10B981'
          }
        ]
      },

      channelsInAction: [
        { channel: 'SMS', handled: 'Quick quotes and booking confirmations', why: 'Customers get instant pricing via text' },
        { channel: 'Web', handled: 'Interactive quote calculator + booking', why: 'Self-service option for detail-oriented customers' },
        { channel: 'Phone', handled: 'Voice agent provides quotes and books appointments', why: 'Serves customers who prefer calling' }
      ],

      results: [
        { metric: '92%', description: 'Booking conversion rate', icon: BarChart3 },
        { metric: '< 1 sec', description: 'Quote generation time', icon: Zap },
        { metric: '20 hrs', description: 'Staff time saved weekly', icon: Clock },
        { metric: '380+', description: 'Messages handled daily', icon: TrendingUp },
        { metric: '24/7', description: 'Quote availability', icon: CheckCircle2 },
        { metric: '3×', description: 'More leads captured', icon: ArrowRight }
      ],

      whyItWorked: [
        { 
          feature: 'Dynamic Pricing', 
          reason: 'Quote logic built into flow, instant accurate pricing',
          icon: TrendingUp
        },
        { 
          feature: 'Instant Booking', 
          reason: 'Customer can book immediately after receiving quote',
          icon: Calendar
        },
        { 
          feature: '24/7 Availability', 
          reason: 'Captures leads even when office is closed',
          icon: Clock
        },
        { 
          feature: 'Multi-Channel Sync', 
          reason: 'Same quote flow works across SMS, Web, and Phone',
          icon: MessageCircle
        }
      ],

      templateUsed: 'Service Quote & Booking'
    }
  };

  const caseStudy = caseStudyData[slug || ''] || caseStudyData['urban-bites-restaurant'];

  const getChannelIcon = (channel: string) => {
    switch(channel) {
      case 'WhatsApp': return MessageCircle;
      case 'Phone': return Phone;
      case 'Email': return Mail;
      case 'Web': return Globe;
      case 'SMS': return MessageSquare;
      case 'Instagram': return MessageSquare;
      default: return MessageSquare;
    }
  };

  return (
    <div className="bg-white text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* Back Button */}
      <section className="pt-32 pb-8">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <Link to="/case-studies">
              <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Case Studies</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1️⃣ Snapshot Header */}
      <section className="pb-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Business Info */}
                <div>
                  <div 
                    className="inline-block px-3 py-1 rounded-lg text-xs uppercase tracking-wider mb-4"
                    style={{ 
                      backgroundColor: `${caseStudy.color}15`,
                      color: caseStudy.color
                    }}
                  >
                    {caseStudy.industry}
                  </div>

                  <h1 
                    className="text-4xl lg:text-5xl mb-4 leading-tight"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {caseStudy.businessName}
                  </h1>

                  <p className="text-lg text-gray-600 mb-8">
                    {caseStudy.businessSize}
                  </p>

                  {/* Channels Used */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Channels Used</p>
                    <div className="flex items-center gap-3">
                      {caseStudy.snapshot.channels.map((channel: string, idx: number) => {
                        const ChannelIcon = getChannelIcon(channel);
                        return (
                          <div
                            key={idx}
                            className="px-4 py-2 rounded-lg bg-gray-100 flex items-center gap-2"
                          >
                            <ChannelIcon className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-700">{channel}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Agent Types */}
                  <div>
                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Agent Types</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.snapshot.agents.map((agent: string, idx: number) => (
                        <div
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: `${caseStudy.color}10`,
                            color: caseStudy.color
                          }}
                        >
                          {agent}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Big Metrics */}
                <div className="space-y-4">
                  {caseStudy.snapshot.metrics.map((metric: any, idx: number) => {
                    const Icon = metric.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4"
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${caseStudy.color}20` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: caseStudy.color }} />
                        </div>
                        <div>
                          <p 
                            className="text-2xl mb-1"
                            style={{ fontFamily: 'DM Sans, sans-serif', color: caseStudy.color }}
                          >
                            {metric.value}
                          </p>
                          <p className="text-sm text-gray-600">{metric.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl mb-8 text-gray-800"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                The Problem
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.problems.map((problem: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 flex items-start gap-3"
                    style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)' }}
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ The Flow They Built */}
      <section className="py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl mb-4 text-gray-800 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {caseStudy.flow.title}
              </h2>
              
              <p className="text-center text-gray-600 mb-12">
                This is the core logic that powers their automation
              </p>

              {/* Flow Diagram */}
              <div className="relative">
                {/* Flow Steps */}
                <div className="grid md:grid-cols-4 gap-6 relative">
                  {caseStudy.flow.steps.map((step: any, idx: number) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="relative"
                      >
                        {/* Step Card */}
                        <div 
                          className="bg-white rounded-3xl p-6 relative z-10"
                          style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
                        >
                          <div 
                            className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center mx-auto"
                            style={{ backgroundColor: `${step.color}20` }}
                          >
                            <Icon className="w-7 h-7" style={{ color: step.color }} />
                          </div>

                          <h3 
                            className="text-lg mb-2 text-center"
                            style={{ fontFamily: 'DM Sans, sans-serif', color: step.color }}
                          >
                            {step.label}
                          </h3>

                          <p className="text-sm text-gray-600 text-center leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        {idx < caseStudy.flow.steps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                            <ArrowRight className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Channels in Action */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl mb-12 text-gray-800 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Channels in Action
              </h2>

              <div className="space-y-4">
                {caseStudy.channelsInAction.map((item: any, idx: number) => {
                  const ChannelIcon = getChannelIcon(item.channel);
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="bg-white rounded-3xl p-6"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
                    >
                      <div className="flex items-start gap-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${caseStudy.color}20` }}
                        >
                          <ChannelIcon className="w-6 h-6" style={{ color: caseStudy.color }} />
                        </div>

                        <div className="flex-1">
                          <h3 
                            className="text-lg mb-2"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {item.channel}
                          </h3>
                          <p className="text-gray-700 mb-2">{item.handled}</p>
                          <p className="text-sm text-gray-500 italic">{item.why}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Results That Matter */}
      <section className="py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl mb-12 text-gray-800 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Results That Matter
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result: any, idx: number) => {
                  const Icon = result.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
                    >
                      <Icon 
                        className="w-10 h-10 mx-auto mb-4" 
                        style={{ color: caseStudy.color }} 
                      />
                      <p 
                        className="text-4xl mb-2"
                        style={{ fontFamily: 'DM Sans, sans-serif', color: caseStudy.color }}
                      >
                        {result.metric}
                      </p>
                      <p className="text-sm text-gray-600">{result.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Why This Worked */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl mb-4 text-gray-800 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Why This Worked
              </h2>

              <p className="text-center text-gray-600 mb-12">
                Product logic, not luck
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.whyItWorked.map((item: any, idx: number) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="bg-white rounded-3xl p-6"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${caseStudy.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: caseStudy.color }} />
                        </div>

                        <div>
                          <h3 
                            className="text-lg mb-2"
                            style={{ fontFamily: 'DM Sans, sans-serif', color: caseStudy.color }}
                          >
                            {item.feature}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.reason}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA — Contextual */}
      <section className="py-24">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 
                className="text-3xl lg:text-4xl mb-6 text-gray-800"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Build a similar flow for your business
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                This exact pattern is available as a template. Start with the foundation, customize to your needs.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/templates">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2">
                    <span>View Template: {caseStudy.templateUsed}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/product/flow-builder">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 rounded-xl">
                    Explore Flow Builder
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
