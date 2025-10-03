"use client";

import Inner from "@/components/Layout/Feed/Feed";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Flex from "@/components/UI/Flex/Flex";

const NotFound = () => {
    return (
        <Inner>
            <Flex direction="column" gap={5} justify="center">
                <div>
                    <Heading as="h2" size={6} weight={600} color="error">
                        404
                    </Heading>
                    <Heading size={3}>Page Not Found</Heading>
                </div>
                <Text size={7} color="secondary">
                    When this happens, it&apos;s usually because the content is
                    no longer available, the link is broken, or access has been
                    restricted by the owner.
                </Text>
            </Flex>
        </Inner>
    );
};

export default NotFound;
