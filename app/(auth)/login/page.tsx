import { Center, VStack, Heading, Text, Button, Box } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { NextPage } from 'next'
import NextLink from 'next/link'

const Login: NextPage = () => {
  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <VStack spacing="8" textAlign="center">
            <VStack spacing="4">
              <Heading size="lg" color="primary.500">
                🚀 Schedule Your Demo
              </Heading>
              <Heading size="xl">
                See ATS Assist in Action
              </Heading>
              <Text color="muted" fontSize="lg">
                Book a personalized demo to see how ATS Assist can transform your job search. 
                Our team will show you the platform and answer all your questions.
              </Text>
            </VStack>

            <VStack spacing="6">
              <Button
                as="a"
                href="https://calendly.com/ats-assitant"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="primary"
                size="lg"
                width="100%"
                height="60px"
                fontSize="lg"
              >
                📅 Schedule Demo on Calendly
              </Button>
              
              <Text fontSize="sm" color="muted">
                Demo takes 15-20 minutes • No commitment required
              </Text>
            </VStack>

            <Box bg="gray.50" p="6" borderRadius="lg" width="100%" _dark={{ bg: 'gray.800' }}>
              <VStack spacing="3" textAlign="left">
                <Heading size="md">What You'll See:</Heading>
                <Text fontSize="sm" color="muted">
                  • Live demo of AI resume builder<br/>
                  • ATS optimization in action<br/>
                  • Application tracking dashboard<br/>
                  • Pricing and beta access details<br/>
                  • Q&A session
                </Text>
              </VStack>
            </Box>

            <Text color="muted" fontSize="sm">
              Need immediate help?{' '}
              <Link href="mailto:hello@ats-assist.com" color="primary.500">
                Contact us directly
              </Link>
            </Text>
          </VStack>
        </PageTransition>
      </Center>
    </Section>
  )
}

export default Login
