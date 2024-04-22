import MediaRow from '../components/MediaRow';
import { useMedia } from '../hooks/ApiHooks';
const Home = () => {

 const {mediaArray} = useMedia();

 console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Owner</th>
          <th>Description</th>
          <th>Created</th>
          <th>Size</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
            // setSelectedItem={setSelectedItem}
          />
        ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
