import { Button, Paragraph } from '@my/ui'
import { Card } from '@tamagui/card'
import { Image } from '@tamagui/image'
import { XStack, YStack } from '@tamagui/stacks'
import { View, ViewComponent } from 'react-native'
import { useLink } from 'solito/navigation'
import { styled } from '@my/ui'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })
  const StyledView = styled(View, {
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
    inlineSize: '100%',
  })

  return (
    <YStack>
      <Image
        source={{
          uri: require('apps/expo/assets/image/coffee6.png'),
          width: '100%',
          height: '70%',
        }}
      />
      <StyledView>
        <Paragraph color={'#fff'} fos={32} textAlign="center" borderTopWidth={5}>
          Fall in Love with Coffee in Blissful Delight!
        </Paragraph>
        <Paragraph color={'#fff'} fos={18} textAlign="center">
          Welcome to our cozy coffee corner, where every cup is a delightful for you.{' '}
        </Paragraph>
        <Button alignSelf="center" size="$6">
          Get Started
        </Button>
      </StyledView>
    </YStack>
  )
}
