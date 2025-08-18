import { Box, Center, Stack, Text, VStack, Heading, Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { PageTransition } from '#components/motion/page-transition'
import { Section } from '#components/section'
import siteConfig from '#data/config'

const Signup: NextPage = () => {
  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          spacing="20"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box pe="20">
            <NextLink href="/">
              <Box
                as={siteConfig.logo}
                width="160px"
                ms="4"
                mb={{ base: 0, lg: 16 }}
              />
            </NextLink>
            <Features
              display={{ base: 'none', lg: 'flex' }}
              columns={1}
              iconSize={4}
              flex="1"
              py="0"
              ps="0"
              maxW={{ base: '100%', xl: '80%' }}
              features={siteConfig.signup.features.map((feature) => ({
                iconPosition: 'left',
                variant: 'left-icon',

                ...feature,
              }))}
            />
          </Box>
          <Center height="100%" flex="1">
            <Box width="container.sm" pt="8" px="8">
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
                  By scheduling a demo you agree to our{' '}
                  <Link href={siteConfig.termsUrl} color="primary.500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href={siteConfig.privacyUrl} color="primary.500">
                    Privacy Policy
                  </Link>
                </Text>
              </VStack>
            </Box>
          </Center>
        </Stack>
      </PageTransition>
    </Section>
  )
}

export default Signup
