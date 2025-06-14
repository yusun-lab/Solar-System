import skyTexture from '../../assets/images/Sky.jpg';

const Sky = () => {
  return (
    <a-sky
      src={skyTexture}
      rotation="0 -90 0"
      radius="1000"
    />
  );
};

export default Sky;
