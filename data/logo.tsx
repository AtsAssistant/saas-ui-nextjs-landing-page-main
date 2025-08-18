import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  const primaryColor = useColorModeValue('#8952e0', '#a78bfa')
  
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      {...props}
    >
      {/* ATS Assist Text Logo */}
      <text
        x="10"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill={color}
      >
        ATS
      </text>
      <text
        x="10"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="normal"
        fill={primaryColor}
      >
        Assist
      </text>
      
      {/* Simple icon representing resume/document */}
      <rect
        x="150"
        y="15"
        width="30"
        height="40"
        rx="3"
        fill="none"
        stroke={primaryColor}
        strokeWidth="2"
      />
      <line
        x1="155"
        y1="25"
        x2="175"
        y2="25"
        stroke={primaryColor}
        strokeWidth="1.5"
      />
      <line
        x1="155"
        y1="30"
        x2="175"
        y2="30"
        stroke={primaryColor}
        strokeWidth="1.5"
      />
      <line
        x1="155"
        y1="35"
        x2="170"
        y2="35"
        stroke={primaryColor}
        strokeWidth="1.5"
      />
    </chakra.svg>
  )
}
