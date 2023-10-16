import NavLayout from "@/components/NavLayout";
import { Button, Center } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavLayout>
        <div className="landing_page_wrapper">
          <div className="inner">
            <p>
              <span style={{ fontWeight: 600, fontSize: "22px" }}>&quot;Manifestation&quot;</span> is a cutting-edge web
              application designed to empower users to visually represent their digital identity with a single scan. By
              generating personalized QR codes, our app seamlessly bridges the physical and digital worlds, fostering
              connections between individuals, businesses, and organizations. With a simple scan,
              &quot;Manifestation&quot; directs users to their own dedicated profile page, allowing them to curate and
              share vital information, achievements, and personal details. This innovative platform embodies the concept
              of manifesting one&apos;s online presence, offering a professional and efficient means of conveying user
              information, fostering networking, and making a lasting impression in a fast-paced, digitally
              interconnected world.
            </p>
            <Center>
              <Button component={Link} href="/auth/login" mt={"lg"} color="violet.9">
                START HERE
              </Button>
            </Center>
          </div>
        </div>
      </NavLayout>
    </main>
  );
}
