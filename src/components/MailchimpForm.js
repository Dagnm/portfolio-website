import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newletter";
export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_ID}`;
return(
  <>
  <MailchimpSubscribe
  url={postUrl}
  render={({ subscribe, status, messase})=>(
    <Newsletter
    status={status}
    message={messase}
    onValidated={formData=>subscribe(formData)}
    />
  )}
  />
  </> 
)
};
