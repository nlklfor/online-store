import {Html, Heading, Button} from "@react-email/components";

export default function Email() {
    // const cartStore  = useCartStore()
    return (
        <Html>
            <Heading as="h2">Pacan4ik KVN smotrit</Heading>
            <Button
                href="https://alchevsque.com/"
                style={{ color: "#3eb5da", padding: "10px 20px", borderRadius: "10px", backgroundColor: "#0b303f" }}
            >
                SMOTRET' KVN
            </Button>
        </Html>
    );
}
