import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { provider } = data;

  return (
    <div>
      <div>
        <img src={provider?.service.serviceImgURL} alt="" />
      </div>
    </div>
  );
};

export default ServiceDetails;
