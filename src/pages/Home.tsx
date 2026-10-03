import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <main>
      <ProfileCard
        name="Akmaral Zharkynbek"
        description="IT Management Student and Aspiring Web Developer"
        links={[
          {
            label: "GitHub",
            url: "https://github.com/zharkynbeka328-wq",
          },
          {
            label: "Instagram",
            url: "https://instagram.com/",
          },
        ]}
      />
    </main>
  );
}

export default Home;