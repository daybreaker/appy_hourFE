import { Text, TouchableOpacity, View } from 'react-native';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onPress?: () => void;
  className?: string;
  children?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  children,
  onPress,
}: ButtonProps) => {

  return (
    <TouchableOpacity accessibilityRole="button" activeOpacity={0.6} onPress={onPress}>
      <View>
        {children ? children :
        <Text>{label}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};
