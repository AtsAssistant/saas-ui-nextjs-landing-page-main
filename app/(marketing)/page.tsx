'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'ATS Assist – AI Resumes & Job Application Tracker',
  description: 'Build ATS-friendly resumes with AI and track your job applications in one dashboard.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      
      {/* Beta Announcement Banner - positioned below navbar */}
      <Box
        position="relative"
        top="0"
        left="0"
        right="0"
        zIndex="1"
        bg="primary.500"
        color="white"
        textAlign="center"
        py="3"
        px="4"
        mt="80px" // Add margin-top to push below navbar
      >
        <Text fontSize="sm" fontWeight="medium">
          🚀 <strong>SCHEDULE A DEMO</strong> - See ATS Assist in action and get personalized guidance
        </Text>
      </Box>
      
      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Land Your Dream Job
                <Br /> with ATS Assist
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Generate <Em>AI-optimized resumes</Em>
                <Br /> and track every application in one place.
                <Br />
                <Text fontSize="md" color="primary.500" mt="2">
                  🚀 Schedule a Demo - See How It Works
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://calendly.com/ats-assitant">
                  Schedule Demo
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://calendly.com/ats-assitant"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Book a Call
                </ButtonLink>
              </ButtonGroup>
              
              <Text fontSize="sm" color="muted" mt="4">
                ⏰ Book your slot today - Limited availability this week
              </Text>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/dashboard.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of ATS Assist dashboard showing resume builder and application tracker"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'AI-Powered',
            icon: FiSmile,
            description: 'Advanced AI technology optimizes your resume for ATS success.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'ATS-Optimized',
            icon: FiSliders,
            description:
              'Every resume is crafted to pass Applicant Tracking Systems and reach human recruiters.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Track Applications',
            icon: FiGrid,
            description:
              'Organize and monitor every job application with our intuitive dashboard.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Smart Insights',
            icon: FiThumbsUp,
            description:
              'Get actionable feedback to improve your resume and boost interview chances.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('npm install @ats-assist/core')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="See ATS Assist in Action">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get a <Em>personalized demo</Em> of our AI-powered resume building platform.
            Including ATS optimization, application tracking, and smart insights.
            Fully functional dashboard with progress monitoring and analytics.
          </Text>

          <Box
            bg="primary.50"
            p="4"
            borderRadius="lg"
            border="1px solid"
            borderColor="primary.200"
            _dark={{ bg: 'primary.900', borderColor: 'primary.700' }}
          >
            <Text fontSize="sm" color="primary.700" _dark={{ color: 'primary.200' }}>
              🚀 <strong>Demo Benefits:</strong> Live platform walkthrough, personalized use case discussion, 
              pricing details, and Q&A session with our team.
            </Text>
          </Box>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Schedule
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                a Demo
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy calendly link"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Personalized Demo Experience">
        <Text color="muted" fontSize="lg">
          Our demos are tailored to your specific needs. Whether you're a job seeker, 
          career coach, or HR professional, we'll show you exactly how ATS Assist can help.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Sarah Chen"
        description="Demo Attendee"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        "The demo was incredibly helpful! I got to see exactly how the platform works and ask all my questions. Highly recommend!"
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Everything you need to succeed"
      >
        <Text color="muted" fontSize="lg">
          We've built a comprehensive platform that covers every aspect of your
          job search journey, from resume creation to application tracking.
        </Text>
        <Wrap mt="8">
          {[
            'AI resume builder',
            'ATS optimization',
            'application tracking',
            'progress analytics',
            'interview prep',
            'job recommendations',
            'resume templates',
            'cover letters',
            'skill matching',
            'industry insights',
            'mobile app',
            'email alerts',
            'calendar sync',
            'networking tools',
            'salary insights',
            'company research',
            'interview feedback',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> resume builder.
        </Heading>
      }
      description={
        <>
          ATS Assist includes everything you need to create winning resumes and
          <Br />
          track your job search progress with AI-powered insights.
          <Br />
          <Text fontSize="lg" color="primary.500" mt="2">
            🚀 <strong>Schedule a Demo</strong> - See the platform in action
          </Text>
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'AI Resume Builder',
          icon: FiBox,
          description:
            'Write resumes tailored for ATS success with our advanced AI that understands what recruiters look for.',
          variant: 'inline',
        },
        {
          title: 'Application Tracking',
          icon: FiLock,
          description:
            'Organize, monitor, and never lose track of your job hunt with our comprehensive tracking system.',
          variant: 'inline',
        },
        {
          title: 'Smart Insights',
          icon: FiSearch,
          description:
            'Learn how to improve your resume and boost interview chances with data-driven recommendations.',
          variant: 'inline',
        },
        {
          title: 'ATS Optimization',
          icon: FiUserPlus,
          description:
            'Every resume is optimized to pass Applicant Tracking Systems and reach human recruiters.',
          variant: 'inline',
        },
        {
          title: 'Progress Analytics',
          icon: FiFlag,
          description:
            'Track your job search progress with detailed analytics and identify areas for improvement.',
          variant: 'inline',
        },
        {
          title: 'Interview Prep',
          icon: FiTrendingUp,
          description:
            'Get personalized interview preparation resources based on your target roles and companies.',
          variant: 'inline',
        },
        {
          title: 'Resume Templates',
          icon: FiToggleLeft,
          description:
            'Choose from industry-specific templates designed to impress recruiters and pass ATS screening.',
          variant: 'inline',
        },
        {
          title: 'Cover Letters',
          icon: FiTerminal,
          description:
            'Generate compelling cover letters that complement your resume and increase application success.',
          variant: 'inline',
        },
        {
          title: 'Mobile App',
          icon: FiCode,
          description: (
            <>
              Access your job search tools anywhere with our mobile app, available on{' '}
              <Link href="https://apps.apple.com">iOS</Link> and Android.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
