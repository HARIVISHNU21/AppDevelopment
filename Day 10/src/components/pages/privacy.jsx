import React from 'react'
import './privacy.css'


import Footer from './Footer'


function Privacy() {
  return (
    <>
    <div className='privacybody'>
    <div className='containerpp'>
    <div className='pph'><center>Privacy Policy</center></div>
    <div className='ppc'>
    # Noise Tracker Privacy Policy

This privacy policy outlines how our Noise Tracker application ("the App") collects, uses, and protects your personal information. We are committed to safeguarding your privacy and ensuring the security of your data.

Information We Collect

Location Data

The App may request access to your device's location to provide you with noise level data specific to your location. Location data is used solely for this purpose and is not stored or shared with third parties.

Noise Level Data

The App measures and records noise levels in your vicinity. This noise level data is collected anonymously and is used to provide noise-related information and statistics to users. We do not collect personally identifiable information through noise level data.<br/><br/>
      <b> How We Use Your Data<br/><br/></b>
      Noise Level Data

Noise level data collected by the App is used for the following purposes:

- Providing you with real-time noise level information.
- Generating noise level statistics and trends.
- Improving the accuracy and performance of the App.<br/><br/>
Data Security

We take data security seriously and have implemented measures to protect your information from unauthorized access, disclosure, alteration, or destruction. Your data is stored securely, and access is restricted to authorized personnel only.

## Third-Party Services

The App may use third-party services, such as map providers, for location-based features. These services may have their own privacy policies, and we encourage you to review them. We are not responsible for the practices of third-party services.

## Consent

By using the App, you consent to the collection and use of your data as described in this privacy policy.
<br/><br/>
Changes to the Privacy Policy

We may update this privacy policy to reflect changes in our data practices or legal requirements. Any updates will be posted on our website or within the App. We encourage you to review this policy periodically.

## Contact Us

If you have questions or concerns about this privacy policy or your data, please contact us at [contact@email.com].
<br/><br/>  In this policy, personal information means information about you that is personally identifiable 
    like your name, address, e-mail address or phone number, and that is not otherwise publicly available and 
    is not part of your work identification.
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Privacy