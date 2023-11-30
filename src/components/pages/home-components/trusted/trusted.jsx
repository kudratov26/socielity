import dropbox from '../../../../imgs/partners/dropbox.png';
import paypal from '../../../../imgs/partners/paypal.png';
import pfizer from '../../../../imgs/partners/pfizer.png';
import pwc from '../../../../imgs/partners/PWC.png';
import target from '../../../../imgs/partners/target.png';
import zoom from '../../../../imgs/partners/zoom.png';

export const Trusted = () => {
  return (
    <div className='mt-[112px] text-center'>
      <h2 className="text-gray-title text-[26px] font-bold">Trusted By</h2>
      <p className="text-gray mt-8 mb-[46px]">The private on-line marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a select group of individuals, organizations, and businesses that you know and trust.</p>
      <div className="flex">
        <img src={pwc} alt="" />
        <img src={target} alt="" />
        <img src={zoom} alt="" />
        <img src={dropbox} alt="" />
        <img src={paypal} alt="" />
        <img src={pfizer} alt="" />
      </div>
      <div className="flex justify-center mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20" fill="none">
          <circle cx="8" cy="10" r="8" fill="#E6E6E6" />
          <circle cx="35" cy="10" r="10" fill="#4579CB" />
          <circle cx="62" cy="10" r="8" fill="#E6E6E6" />
        </svg>
      </div>
    </div>
  );
};
