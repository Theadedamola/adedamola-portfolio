import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import shieldImage1 from './shieldonboard.png'
import shieldImage2 from './shielddashboard.png'
import shieldImage3 from './shieldsavings.png'
import shieldImage4 from './shieldaccount.png'
import shieldImage5 from './shieldkyc.png'

import nodefiImage1 from './nodefiuserflow.png'
import nodefiImage2 from './nodefionboard.png'
import nodefiImage3 from './nodefiinbox.png'
import nodefiImage4 from './nodefichannels.png'
import nodefiImage5 from './nodefiupdate.png'

export let caseStudy = [
  {
    id: 1,
    thumbnail: thumbnail1,
    name: 'Shield: A design solution for a Traditional bank',
    subtext:
      'Shield, a financial service provider, aims to redesign its digital wallet proposition to cater to a diverse range of clients, including Odogwu’s, Gen-A & Z, artisans, and market women. The current challenge lies in simplifying the onboarding process while allowing for seamless upgrading of wallet tiers. Additionally, Shield seeks to promote savings among its customers by enabling easy target setting, simplified saving mechanisms, and rewarding saving behaviors. Furthermore, the organization aims to address the issue of profile inactivity by ensuring customers can reactivate their profiles effortlessly when needed.',
    heading1: 'Process',
    subheading1: 'The Problem',
    content1:
      'Shield, a financial service provider, aims to redesign its digital wallet proposition to cater to a diverse range of clients, including Odogwu’s, Gen-A & Z, artisans, and market women. The current challenge lies in simplifying the onboarding process while allowing for seamless upgrading of wallet tiers. Additionally, Shield seeks to promote savings among its customers by enabling easy target setting, simplified saving mechanisms, and rewarding saving behaviors. Furthermore, the organization aims to address the issue of profile inactivity by ensuring customers can reactivate their profiles effortlessly when needed.',
    subheading2: 'Goals',
    content2:
      'Simplify Onboarding: Design an intuitive and user-friendly onboarding process that caters to a wide range of clients, from Odogwu’s to Gen-A & Z, artisans, and market women. Ensure that the onboarding process is straightforward, seamless, and accessible to all demographics. Flexible Wallet Tiers: Create a digital wallet proposition that allows for easy upgrading of wallet tiers. Implement a system that enables users to upgrade their wallet tiers on the go, based on their financial needs and preferences. Promote Savings: Develop features within the digital wallet that encourage savings behavior among customers. Enable users to set savings targets easily, implement simplified saving mechanisms, and reward customers for reaching their savings goals. Profile Reactivation: Address the issue of profile inactivity by designing a system that allows customers to reactivate their profiles effortlessly. Ensure that customers can resume using their digital wallets without any hassle if their profiles become inactive. Enhance User Experience: Overall, the project aims to enhance the user experience of Shields digital wallet proposition. This includes improving usability, accessibility, and functionality to ensure a positive and engaging experience for all users across different demographics.',
    heading2: 'Solution',
    subheading3: 'ONBOARDING',
    content3:
      'Designed a simple onboarding where users can simply open an account with their phone number and create a six-digit password, verify their phone number to ensure security. An existing user but just opening the app on a new device will need to provide their phone number and password while already opened account on the same device will just need their 6-digit password or their biometrics.',
    image1: shieldImage1,
    subheading4: 'Dashboard',
    content4:
      'The dashboard allows user to see the available balance in their wallet, and also use other features such as, receive and send money, pay bills, buy airtime and data subscription and fund betting accounts. It also has a banner that prompts users to create a savings plan, see their recent transactions and navigate to other sections of the app.',
    image2: shieldImage2,
    subheading5: 'Savings',
    content5:
      'Savings allow users to see the amount already saved, choose to add money or start a new plan, also withdraw and see the maturity date of each saving, see transaction history. Also when starting a new plan you can choose to save as you want, save daily, weekly or monthly, save a percentage of every amount you spend and lastly saved a fixed deposit.',
    image3: shieldImage3,
    subheading6: 'History & Account',
    content6:
      'A list of transactions performed on your account, it is listed by date and can also be filtered. On your account you can see your profile, change your password and transaction pin, complete your KYC process to upgrade your account tier, reactivate your account and log out from the app. You can also enable biometrics like facial recognition or thumbprint to make easy log in.',
    image4: shieldImage4,
    subheading7: 'KYC',
    content7:
      'A list of transactions performed on your account, it is listed by date and can also be filtered. On your account you can see your profile, change your password and transaction pin, complete your KYC process to upgrade your account tier, reactivate your account and log out from the app. You can also enable biometrics like facial recognition or thumbprint to make easy log in.',
    image5: shieldImage5,
    subheading8: 'Conclusion',
    content8:
      'The redesign and implementation of Shields digital wallet proposition achieved the goals of simplifying onboarding, enabling flexible wallet tiers, promoting savings behaviors, addressing profile inactivity, and enhancing user experience. This comprehensive approach has led to increased customer satisfaction, engagement, and retention, showcasing Shields commitment to innovative and customer-centric financial services.',
    subheading9: 'Next step',
    content9:
      'More Usability studies to be carried out and more features to be implemented such as the virtual card feature.',
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    name: 'Nodefi: Opt in notification for dApps',
    subtext:
      'Opt-in notification for dApps is a decentralized notification protocol that enables users to receive notifications for on-chain or off-chain activities and can tie them to their gmail or discord.',
    heading1: 'Process',
    subheading1: 'THE PROBLEM',
    content1:
      'Opt-in notification for dApps is a decentralized notification protocol that enables users to receive notifications for on-chain or off-chain activities and can tie them to their gmail or discord.',
    subheading2: 'GOALS',
    content2:
      'To help users in web3 get notifications without entering their wallets itself and also to help user keep track of how their assets are doing in the market by sending direct notification of price pump or liquidity etc. directly to their email or telegram.',
    heading2: 'Solution',
    subheading3: 'Userflow',
    content3:
      'A flow representing the user movement from connecting wallet to seeing notifications',
    image1: nodefiImage1,
    subheading4: 'Onboarding',
    content4:
      'Choose your preferred method to connect your wallet and get started. Scan QR code to from your wallet app for seamless linking',
    image2: nodefiImage2,
    subheading5: 'Inbox',
    content5:
      'The inbox for messages from subscribed channels. The channels screen for seeing subscribed channels and can also subscribed to new channels.',
    image3: nodefiImage3,
    subheading6: 'Channels',
    content6:
      'Using Quickstep for example, modal to choose what to get notified for and which app linked to get the notification. Updated channel to show subscribed channels and notification pop up to check inbox.',
    image4: nodefiImage4,
    subheading7: 'Inbox update',
    content7: 'Updated inbox and gmail notification interface.',
    image5: nodefiImage5,
    subheading8: 'Conclusion',
    content8:
      'The redesign and implementation of Shields digital wallet proposition achieved the goals of simplifying onboarding, enabling flexible wallet tiers, promoting savings behaviors, addressing profile inactivity, and enhancing user experience. This comprehensive approach has led to increased customer satisfaction, engagement, and retention, showcasing Shields commitment to innovative and customer-centric financial services.',
    subheading9: 'Next step',
    content9:
      'More Usability studies to be carried out and more features to be implemented such as the virtual card feature.',
  },
]
