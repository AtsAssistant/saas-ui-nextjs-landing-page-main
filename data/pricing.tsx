import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Beta Program Pricing',
  description:
    'Join our exclusive beta program and get early access to ATS Assist at special pricing.',
  plans: [
    {
      id: 'free',
      title: 'Beta Tester',
      description: 'Free access during our beta program with basic features.',
      price: 'Free',
      features: [
        {
          title: '3 AI-optimized resumes',
        },
        {
          title: 'Basic ATS optimization',
        },
        {
          title: '5 job applications tracking',
        },
        {
          title: 'Standard templates',
        },
        {
          title: 'Email support',
        },
        {
          title: 'Mobile app access',
        },
        {
          title: 'Basic analytics',
        },
      ],
      action: {
        href: 'https://calendly.com/ats-assitant',
        label: 'Schedule Demo',
      },
    },
    {
      id: 'pro',
      title: 'Beta Pro',
      description: 'Enhanced beta access with premium features and priority support.',
      price: '$9',
      isRecommended: true,
      features: [
        {
          title: 'Unlimited resumes',
        },
        {
          title: 'Advanced ATS optimization',
        },
        {
          title: 'Unlimited applications tracking',
        },
        {
          title: 'Premium templates',
        },
        {
          title: 'Priority support',
        },
        {
          title: 'Advanced analytics',
        },
        {
          title: 'Cover letter generator',
        },
        null,
        {
          title: 'Interview prep resources',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://calendly.com/ats-assitant',
        label: 'Schedule Demo',
      },
    },
    {
      id: 'enterprise',
      title: 'Beta Enterprise',
      description: 'For career coaches and HR professionals in our beta program.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $49
          </Text>
          <Text>$29</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Everything in Beta Pro',
        },
        {
          title: 'Client management',
        },
        {
          title: 'Bulk resume processing',
        },
        {
          title: 'White-label options',
        },
        null,
        {
          title: 'API access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://calendly.com/ats-assitant',
        label: 'Schedule Demo',
      },
    },
  ],
}
