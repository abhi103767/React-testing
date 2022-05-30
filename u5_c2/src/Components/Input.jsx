import eye from './eye.svg'
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {

  return (
    <div className={`'inputContainer' ${size}`} width={'100px'} style={{
      width: '250px',
      display: 'flex',
      fontSize: size,
      padding: '5px',
      border: '1px solid gray',
      justifyContent: 'space-around'
    }} >
      {/* Add Right Logo */}

      <input className={` input`} type={type} />
      <img src={rightLogo} width='16px' />

    </div>
  );
};
