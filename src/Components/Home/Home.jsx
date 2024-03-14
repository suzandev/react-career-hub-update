import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <FeaturedJobs />
      <h3>This is Home Components</h3>
    </div>
  );
};

export default Home;
