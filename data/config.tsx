import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'ATS Assist',
    description: 'AI-powered resume builder and job application tracker',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Schedule Demo',
        href: 'https://calendly.com/ats-assitant',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="#">ATS Assist Team</Link>
      </>
    ),
    links: [
      {
        href: '#',
        label: 'Contact',
      },
      {
        href: '#',
        label: <FaTwitter size="14" />,
      },
      {
        href: '#',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building your career with ATS Assist',
    features: [
      {
        icon: FiCheck,
        title: 'AI-Powered',
        description: 'Advanced AI technology optimizes your resume for ATS success.',
      },
      {
        icon: FiCheck,
        title: 'ATS-Optimized',
        description:
          'Every resume is crafted to pass Applicant Tracking Systems and reach human recruiters.',
      },
      {
        icon: FiCheck,
        title: 'Track Applications',
        description:
          'Organize and monitor every job application with our intuitive dashboard.',
      },
      {
        icon: FiCheck,
        title: 'Smart Insights',
        description:
          'Get actionable feedback to improve your resume and boost interview chances.',
      },
    ],
  },
}

export default siteConfig
