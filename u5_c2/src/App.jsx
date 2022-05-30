import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";

function App() {
  return (
    <div className="container">
      <Input />

      <Image alt={'duck'}
        borderRadius={100}
        width={4}
        height={2}
        fit={'cover'}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARfTOMEBVV1_3fc3Ga_9E_UZ1pBnSGRHCG-qkB-3czg&s'} />
      <Pagination total={10} />
    </div>
  );
}

export default App;
