import { Button, Paragraph, View, YStack } from '@my/ui'
import { getTokenForKey } from '@tamagui/core'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { colorTokens } from '@tamagui/themes'
import { useParams, useRouter } from 'solito/navigation'

export function UserDetailScreen() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
      {/* <View>
        <Paragraph color={'$skin_tone'} lineHeight={'$1'}>
          ssaa{' '}
        </Paragraph>
      </View> */}
    </YStack>
  )
}
