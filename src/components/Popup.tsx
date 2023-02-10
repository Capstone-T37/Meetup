import React from "react";
import { Dialog, Portal, Text } from "react-native-paper"

export interface Props {
    content: any;
}

const Popup : React.FC<Props>= (props: Props) => {
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);
    return (
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
            <Text variant="bodyMedium">{props.content}</Text>
            </Dialog.Content>
        </Dialog>
    </Portal>)
}

export default Popup