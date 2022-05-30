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
    <div className="inputContainer" width={'100px'} style={{
      width: '250px',
      display: 'flex',
      padding: '5px',
      border: '1px solid gray',
      justifyContent: 'space-between'
    }}>
      {/* Add Right Logo */}

      <input className={` input`} type={type} size={size} />
      <img src={eye} width='16px' />


    </div>
  );
};
