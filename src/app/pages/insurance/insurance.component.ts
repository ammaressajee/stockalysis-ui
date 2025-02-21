import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Item } from '../../models/insurance-item'

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss'
})


export class InsuranceComponent {
  items: Item[] = [
    {
      title: 'Property', description: '', content: [
        [
          'Fire Insurance - Personal',
          'This policy covers private dwelling houses. The risks covered under this insurance are damage to the building, contents and personal effects. Some of the additional perils that could be covered under this policy are: malicious damage, explosion, riots, strikes, civil commotion, terrorism, cyclone, storm, tempest, floods, electrical extra, earthquake, impact damage, aircraft damage, bursting & overflowing of water tanks, apparatus & pipes. There are also many specially designed policies offered by various insurers for private dwelling houses. Should you require more information on these policies, please send us your details in the attached contact sheet, at which time we would be glad to furnish you with the information you require.'
        ],
        [
          'Fire Insurance - Business',
          'Fire Insurance is one of the most common policies in the market. This policy is issued to cover buildings, machinery, contents and stocks. Under the fire policy additional perils could be covered. Some of the additional perils that could be covered in this policy are: malicious damage, explosion, riots, strikes, civil commotion, terrorism, cyclone, storm, tempest, floods, electrical extra, earthquake, impact damage, aircraft damage, bursting & overflowing of water tanks, apparatus & pipes.'
        ],
        [
          'Hoteliers Comprehensive Insurance',
          'This policy is specially designed for owners of Hotels. The policy provides a wide range of covers such as: fire & allied perils, consequential loss, plate glass, burglary, cash in transit, cash in safe, public liability, workmen’s compensation, personal accident, stock in trade etc. However, such a comprehensive policy will vary from Insurer to Insurer depending on the policy issued.'
        ],
        [
          'Stock Declaration Insurance',
          'Very often an Insured will find that his stock levels fluctuate considerably during any one period. To avoid the need to adjust the sum insured every time the stock value changes, a stock declaration policy could be obtained. Under this policy the insured will be charged a provisional premium of 75% of the estimated sum insured. At the end of the period the actual premium will be calculated on the average of all the declarations made during that period. The covers that are granted under this policy are the same that are offered in the fire policy. This policy is not offered for retail stocks.'
        ],
        [
          'Consequential Loss (Business Interruption/Protection) Insurance',
          'This is an extension to the fire policy covering the loss of profit, standing charges such as salaries and other expenses, and increased cost of working experienced by an Organisation following the interruption of business due to the occurrence of the perils covered under the fire policy. Consequential loss insurance could only be obtained if you have a fire policy.'
        ],
        [
          'Loss Of Rent Insurance',
          'Loss of rent covers the loss of rent incurred by a landlord due to the occurrence of the perils covered under the fire policy. This is an additional peril covered under the fire policy and in order to obtain this cover, you must have a fire policy. Loss of rent could also be covered under a consequential loss insurance policy.'
        ],
        [
          'Property All Risk Insurance',
          'Is a type of insurance coverage that automatically covers any risk that the contract does not explicitly omit. For example, if an “All Risk Policy” does not expressly omit a particular peril for example “flood”, then it will be covered in the event of a flood.'
        ],
        [
          'Terrorism',
          'Insuring clause for this risk provides coverage against losses due to acts of Terrorism and Sabotage in addition to Riot and Strike, Civil Commotion Damage, Malicious Acts Damage. Cover can be obtained from the International Reinsurance markets for values exceeding the mandatory local fund limits used as the deductibles. There are different forms of wordings used for such policies in which PV (Political Violence) being the most Comprehensive of them all.'
        ]], imageUrl: 'assets/images/property.jpg'
    },
    {
      title: 'Liability', description: 'There are many types of Liability Insurance Policies available in the market. Some of the more common policies are listed below. Should you require a specific policy that is not listed below, please contact us through our “Contact Our Office” form.', content: [

        ['Public Liability Insurance', 'A public liability policy protects the Insured in respect of his legal liability to third parties for both bodily injury (which includes death, illness or disease) and for any loss or damage to property, which occurs in connection with the business insured under this policy. The limit of indemnity would depend on the nature of the business carried on, the guests who visit the premises, types of products sold, types of machinery used, and any other circumstances peculiar to the risk. Cost of legal expenses incurred in defending any claim is also payable with the consent of the Insurers.'],

        ['Personal Liability Insurance', 'This policy is an adaptation to the public liability insurance. Whilst the public liability policy covers the legal liability to businesses/trades, the personal liability policy protects the Insured against claims arising out of his negligence as a private citizen. This policy may include all family members and covers sports, private cycling, and ownership of domestic animals.'],

        ['Professional Indemnity Insurance', 'Professional indemnity policies are issued to Professionals in respect of any claims made against them for breach of professional duty due to negligence committed by the Insured or Employees in business if applicable. The liability of the Insurer will be the limit of indemnity for which the Insured has covered under the policy. Legal costs could also be recovered with the consent of the Insurer.'],

        ['Product Liability Insurance', 'Products liability indemnifies an Insured against legal liability to third parties arising due to accidental bodily injury, illness, disease, death or damage to property caused by products manufactured, supplied or sold by the Insured. The liability of the Insurer shall not exceed the limits of indemnity declared in the policy.'],

        ['Warehouseman’s/Freight Forwarders Liability', 'The operative clause in these policies would indemnify the Assured against their liability to pay damages subject to the terms and conditions laid out in the policy in respect of its activities as a Warehouseman/Freight Forwarder/Shipping Agent/Yard Operator and/or similar activities. The coverage would be in respect of legal liability of the Insured for goods, errors & omissions, fines & duties, and third party liability.'],

        ['Tour Operators/Hoteliers Liability', 'The operative clause would indemnify the Assured against their legal liability to pay damages including legal fees and expenses in respect of death, bodily injury or property damage of guest and/or third parties as applicable.']

      ], subtitle: '', imageUrl: 'assets/images/liability.png'
    },
    {
      title: 'Marine / Hull', description: '', content: [

        [
          'Open Cover',
          'This policy is designed for Companies engaged in regular overseas trade and is issued to Importers, Exporters and those who have frequent shipments and transits. There are many advantages in obtaining this policy. Some of the salient features of this policy are: covers are arranged in advance and there is no risk in any shipment being uninsured, rates of premium are fixed, it could be lodged with the Banks thus providing easy facilitation of establishing letters of credit, and premiums are paid on each shipment that is effected.'
        ],
        [
          'Open (Floating) Policy',
          'This policy is similar to the Open Cover policy except that the calculation of the premium is based on the annual turnover and a deposit premium is collected at the time of obtaining this cover. When the period is completed and all declarations have been sent to the Insurer, the adjustment in premium is made, involving either a refund to the Insured or an additional premium is charged.'
        ], [
          'Marine (Voyage) Insurance',
          'This insurance is obtained to cover loss or damage to cargo whilst being transported by land, sea or air, and is a single voyage cover. If necessary this policy could be extended to cover the voyage plus a period of time after arrival at the destination.'
        ],
        [
          'Hull Insurance',
          'This policy could either be a time policy or a voyage policy. However, most policies are issued for a period of one year and renewable thereafter. Some of the vessels that could be covered under a Hull policy are: Ocean Vessels, River Crafts, Yachts and Pleasure Crafts. This policy covers damage to the vessel/craft, passengers and third party liability.'
        ],
        [
          'Goods in Transit Insurance',
          'Goods and merchandise transported within Sri Lanka are generally covered under a Goods in Transit policy. Cover is granted for loss or damage due to fire, theft or accident. This is an annual policy renewable every year. One of the most important features of this policy is that the goods can be carried in any vehicle, whether it be the Insured’s own vehicle or hired.'
        ]

      ], subtitle: '', imageUrl: 'assets/images/ship.jpg'
    },
    {
      title: 'Auto (Motor)', description: `Motor vehicles basically fall under two main categories. They are commercial vehicles and private vehicles.Commercial vehicles include vehicles such as: Buses, Trucks, Trailers, Dual Purpose Vehicles, Forklifts, Tractors and other heavy vehicles. Private vehicles are again divided into two categories such as Motor Cars and Motor Cycles.<br><br>
‍
Every Organisation or Individual owning a vehicle/vehicles must have the minimum insurance requirement of third party liability insurance cover before putting the vehicle on the street, which is compulsory by law. This covers damage to property or bodily injury caused to third parties.<br><br>

There is also the comprehensive motor insurance policy, which covers damage to the vehicle and damage to third party property or bodily injury caused to third parties. If an Organisation owns a fleet of vehicles of a particular category,they could obtain a fleet insurance policy (one master policy), thus facilitating the easy management of your motor insurance portfolio. The comprehensive insurance policy could also be extended to cover additional perils. Some of the common perils covered under this scheme are: Workmen’s compensation to paid driver, floods, strikes, riots, civil commotion, terrorism, enhanced towing charges, windscreen/window breakage, airbag, and increased third party property damage on commercial vehicles.`,
      content: [

        [
          'Commercial Vehicles',
          'Every organisation or individual owning a vehicle/vehicles must have the minimum insurance requirement of third party liability insurance cover before putting the vehicle on the street, which is compulsory by law. This covers damage to property or bodily injury caused to third parties. However, third party property damage is limited to Rs.15,000.00 only. Therefore it is advisable to increase the third party property damage cover to a more realistic value taking into considering the cost of damage that could be caused to third party properties today. The basic comprehensive covers that we recommend to our Clients’ are:<br><br>✧ Comprehensive<br>✧ SRCC<br>✧ TC<br>✧ Flood/NP<br>✧ WCI to Paid Driver/Cleaner extended to cover against SRCC<br>✧ Third Party Property Damage Rs. 500,000.00 (Minimum)<br>✧ Goods Cover (Ask Clients if they want this Cover)<br>✧ Theft of Parts<br>✧ Inclusion of Excluded Items (This applies only to Hiring/Leasing Vehicles)<br>✧ Airbag Cover for Full Value'
        ],
        [
          'Motor Cycles',
          'Every Organisation or Individual owning a motor cycle/cycles must have the minimum insurance requirement of third party liability insurance cover before putting the motor cycle on the street, which is compulsory by law. This covers damage to property or bodily injury caused to third parties. However, third party property damage is limited to Rs.15,000.00 only. Therefore it is advisable to increase the third party property damage cover to a more realistic value taking into considering the cost of damage that could be caused to third party properties today. The basic comprehensive covers that we recommend to our Clients’ are:<br><br>✧ Comprehensive<br>✧ SRCC<br>✧ TC<br>✧ Flood/NP<br>✧ PAB to Rider/Pillion Rider for Rs. 100,000.00 (Minimum)<br>✧ Third Party Property Damage Rs. 300,000.00 (Minimum)<br>✧ Theft of Parts'
        ], [
          'Private Vehicles',
          'Every Organisation or Individual owning a vehicle/vehicles must have the minimum insurance requirement of third party liability insurance cover before putting the vehicle on the street, which is compulsory by law. This covers damage to property or bodily injury caused to third parties. The basic comprehensive covers that we recommend to our Clients’ are:<br><br>✧ Comprehensive<br>✧ SRCC<br>✧ TC<br>✧ Flood/NP<br>✧ WCI to Paid Driver extended to cover against SRCC<br>✧ PAB to Passengers (Ask Clients if they want this Cover)<br>✧ Windshield Cover (Ask Clients if they want this Cover)<br>✧ Airbag Cover for Full Value'
        ]
      ], subtitle: '', imageUrl: 'assets/images/motor.jpg'
    },
    {
      title: 'Miscellaneous', description: '', content: [
        [
          "Burglary Insurance",
          "This insurance covers the property within the premises against theft following actual, forcible and violent entry to or exit from the premises or consequent to assault, violence or threat thereof to the Insured or Employees of the Insured or any members of the Insured’s family. Some of the items that could be covered under this policy are: stock in trade, goods held in trust or on commissions, furniture, fixtures, fittings, office equipment, stationery, machinery, personal effects, money, and jewellery."
        ],
        [
          "Money Insurance",
          "This policy covers loss to money whilst in transit, whilst in premises during business hours, whilst in the safe/strongroom after business hours, loss arising from hold-up, and robbery. Infidelity of Employees too are covered under this policy provided such loss is discovered within 72 hours. The policy could be extended to cover against Riot & Strike, terrorism, and personal accident to cash carrying employees for an additional premium."
        ],
        [
          "Fidelity Guarantee Insurance",
          "This policy provides cover to Employers in respect of loss of money or goods due to fraud, misappropriation, dishonesty, or criminal breach of trust of the Insured’s Employees."
        ],
        [
          "Glass Insurance",
          "Glass is covered under the fire policy against the fire perils covered under the policy. The fire policy does not cover accidental damage to glass. Glass insurance provides specific cover against accidental damages to glass. Some of the various types of glasses that could be covered under this policy are: plain glass, embossed glass, silvering lettering, ornamental work, shop front display cubicles, doors, shelves, showcases etc."
        ],
        [
          "Personal Accident Insurance",
          "This insurance provides cover to the Insured Person/s against death or disablement due to an accident, and is operative on a 24-hour basis. Worldwide cover is provided for incidental travel only. The policy could be extended to provide cover against riot and strike, terrorism, and motor cycling or traveling as a pillion rider."
        ],
        [
          "Workmen’s Compensation Insurance",
          "This policy is designed to indemnify an Employer against any legal liability to his Employees for bodily injury or disease arising out of and whilst in the course of employment. The Employer is legally liable to pay compensation to such Employees under the workmen’s compensation ordinance or at common law. In addition, the policy covers all legal expenses incurred with the consent of the Insurer in defending any claim. An important condition of this policy is that the jurisdiction limits of this policy are restricted only to Sri Lanka, and the judgment of any court outside Sri Lanka will not be permitted. This policy could also be extended to cover the Workmen of Contractors/Sub-Contractors of the Insured. Terrorism could be covered as per the workmen’s compensation ordinance, excluding common law liability as provided by the Government fund for SR & CC and Terrorism."
        ],
        [
          "Boiler Explosion Insurance",
          "This policy covers damage to the boiler or pressure vessels by explosion or collapse caused by steam, air, or fluid pressure. The policy also covers legal liability to third parties for bodily injury or death, other than the Employees, Workmen, or Family Members of the Insured, and damage to third party properties not belonging to the Insured. All types of steam or hot water heating Boilers, built-in Economisers, Super Heaters, Steam Pressure Vessels, or any plant which operates under pressure, may be covered under this policy."
        ],
        [
          "Cyber Insurance",
          "What is cyber insurance and why you need it - Cyber insurance can't protect your organization from cyber crime, but it can keep your business on stable financial footing should a significant security event occur. Cyber Insurance consists of 2 Sections – 1st Party Loss & 3rd Party Loss. 1st Party Loss consists of Network Business Interruption, Intangible Property, Loss of Digital Assets, Crisis Management Costs & Cyber Extortion. 3rd Party Loss consists of Litigation and Regulatory, Regulatory Response, Notification Costs, Crisis Management, Credit Monitoring, Media Liability & Privacy Liability."
        ],
        [
          "Trade Credit Insurance",
          "Trade Credit Insurance Policy protects your business from bad debts losses due to non-payment by your Customers. Benefits of the Policy include:<br><br>✧ Balance Sheet Protection.<br>✧ Financing tool.<br>✧ Enhance business Competitiveness.<br>✧ Credit Risk Assessment tool.<br><br>Coverage:<br>✧ Protracted Default or Delayed Payment by the debtors.<br>✧ Insolvency.<br>✧ Natural Disasters such as Earthquakes, Hurricanes, Floods Etc.<br>✧ Import License cancellation.<br>✧ Governments prevention of buyer’s payment transactions.<br><br>Exclusions:<br>✧ Trade Disputes.<br>✧ Non-Acceptance of Goods.<br>✧ Currency Fluctuations."
        ],
        [
          "Machinery Breakdown Insurance",
          "Machinery Breakdown policies are specially designed to cover damages caused to Machinery whilst at the premises against electrical and mechanical breakdown, and accidental damages from extraneous causes. The policy however does not provide cover during erection or commissioning. Some of the types of Machinery that could be covered under this policy are: Boilers, Air Compressors, Lifts, Service Hoists, Central Air Conditioning Systems, Electric Motors, generators, Water Pumps etc. The policy could also be extended to cover explosion, impact damage to surrounding property due to explosion of Boilers/Pressure Vessels and third party liability consequent to explosion of Boiler/Pressure Vessels."
        ],
        [
          "Contractors All Risks Insurance",
          "This policy is issued to Contractors and/or Principals who are involved in construction or civil engineering projects. Insurers have specially designed a Contractors All Risks (CAR) Policy to provide protection to such Contractors who have to face many risks during the course of construction. The CAR policy is divided into two main categories: material damage and third party liability. The coverage is almost on an “All Risks” basis, subject to certain specific exclusions. Some of the perils covered would be: fire, lightning, explosion, malicious damage, inundation, cyclone, storm, tempest, floods, burglary, theft, accidental damage, landslide, subsidence, and earthquake. Third party liability covers the legal liability of the Insured as a result of accidental bodily injury or property damage to third parties. Cover commences from the time of unloading the goods at the site or from the date of commencement of work, and continues during the construction period. The policy expires when the contract works are taken over or put into service, or when the period of Insurance expires. The policy could be extended to cover a maintenance period, riot & strike, terrorism, clearance of debris, damage to surrounding properties belonging to or under the control of the Insured/Contractor/Principal etc., for an additional premium."
        ],
        [
          "Erection All Risks Insurance",
          "Erection All Risks (EAR) policy is similar to that of the CAR policy, but the main difference is that it involves the erection of Machinery. The cover commences from the time of unloading the items at the site, continues through erection, and ceases after taking over of the erected Machinery by the Principal or after the first test run. If testing period is also required to be covered, same could be given only for new Machinery and may be extended to include four weeks of testing. However, for second-hand Machinery, the cover ceases immediately after the test run is complete. The cover is on an “All Risks” basis and includes: fire, lightning, malicious damage, explosion, accidental damage, flood, inundation, cyclone, storm, burglary, theft, landslide, subsidence, and earthquake. The policy could be extended to cover accidental bodily injury/illness/death and loss/damage to third party properties. In addition, the Insurers will pay all costs and expenses of litigation recovered by the Claimant from the Insured and all costs and expenses incurred by the Insured with the written consent of the Insurer. The policy could be extended to cover riot and strike, terrorism, clearance of debris, and surrounding properties belonging to or under the control of the Insured."
        ],
        [
          "Electronic Equipment Insurance",
          "An Electronic Equipment policy has been specially designed on a comprehensive basis to cover loss/damage caused to Electronic items. Some of the items that could be insured under this policy are: Fax Machines, Photo Copiers, PABX Systems, Radios, Televisions, Medical Equipment, Electronic Typewriters etc. The cover is provided on an all-risk basis. Some of the important covers included in the policy are: fire, lightning, explosion, malicious damage, theft, short circuiting, over voltage, accidental damage, cyclone, storm, flood, inundation etc. The policy could also be extended to cover the perils of riot & strike and terrorism. The sum insured under this policy should be the replacement cost of a new item similar to that of the damaged equipment."
        ],
        [
          "Computer Insurance",
          "This policy is specifically designed to cover any accidental loss to Computers and Associated Equipment. The policy is offered on an all-risk basis. Generally, the policy covers the following perils: fire, lightning, explosion, malicious damage, theft, short circuiting, over voltage, accidental damage, cyclone, storm, flood, inundation etc., and could be extended to cover riot & strike and terrorism. Cover against loss/damage suffered to software too could be covered under the policy. In addition, this policy could be extended to cover consequential loss for recompilation of data and increased cost of working."
        ],
        [
          "Golfers Insurance",
          "This policy covers the legal liability of a Golfer against accidental bodily injury to any person or accidental damage to third party properties whilst playing golf in any recognized golf course in Sri Lanka. In addition to the above, Insurers generally include cover against damage to golf clubs by accidental breakage whilst the Insured is in the course of play,and personal accident cover to the Insured for death and personal disablement caused by bodily injury resulting from any accident caused on any golf course."
        ]
      ],
      subtitle: '',imageUrl: 'assets/images/misc.jpg'
    },
    {
      title: 'Health & Travel', description: '', content: [
        [
          "Surgical & Hospital Insurance (Local)",
          "This policy provides the Insured reimbursement of medical expenses incurred against illness or accidental injury that requires medical treatment or surgery in a hospital. The policy does not cover any expenses on pre-existing illnesses. There is also a waiting period of 30 days from the commencement of the policy on claims made for illnesses. However, hospitalization due to accidental injury does not have a waiting period. The policy could be issued to an Individual, Family or a Group (A Company covering their Employees). There are many different schemes and benefits offered by local Insurers. This policy could also be extended to cover outdoor treatment on specified limits for an additional premium. Special policies are also offered by Insurers covering critical illnesses."
        ],
        [
          "Surgical & Hospital Insurance (International)",
          "International Health policies are similar in principle to that of the local Health policies. However, the limits, territories covered & benefits offered can vary significantly. Some of the Companies that offer such policies in Sri Lanka are: Ceylinco Insurance PLC, Allianz Insurance Lanka Ltd., Aviva Ltd., Bupa Global."
        ],
        [
          "Travelers Insurance",
          "The high demand in business and personal overseas travel has prompted Insurers to offer a comprehensive cover to the traveler and members of his/her family offering a wide range of covers. This policy can be purchased for a single trip or on an annual basis which would cover multiple trips during the period of cover. There are various schemes offered by local Insurers. Cover is provided worldwide and on an area-by-area basis. Cover includes: personal accident, loss of baggage and personal effects, emergency medical expenses, emergency transport expenses for medical attention, repatriation, cancellation and travel delays, personal liability, passport indemnity, aircraft hijacking, legal expenses, loss of money etc."
        ]
      ], subtitle: '', imageUrl: 'assets/images/travel.jpg'
    },
    {
      title: 'Life & Critical Illness', description: '', content: [
        [
          "Life Insurance",
          "There are many types of Life Insurance contracts offered by the various Insurers. These are long-term contracts that are payable at maturity or at the time of death. These policies are mainly taken as an investment by an Insured or to provide future security and financial well-being of the Insured’s loved ones should the Insured pass away prematurely. Mortgage redemption policies too are offered in order to protect the Insured’s loved ones against being burdened with the payment of a loan in the event of the Insured’s untimely death. Depending on each Individual’s requirements, we could arrange a policy that would best suit the needs of the Individual."
        ],
        [
          "Rider Covers",
          "Some of the Rider Covers that could be incorporated into the Life Products include: Critical Illness, Double Accident, Health."
        ],
        [
          "Other Products",
          "Some of the other Products we can arrange in this category are: Key man, Kidnap & Ransom."
        ]
      ], subtitle: '', imageUrl: 'assets/images/hospital.jpg'
    },
    // Add more items as needed
  ];

  selectedIndex = 0;

  get selectedItem() {
    return this.items[this.selectedIndex];
  }

  scrollLeft() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.updateScroll();
    }
  }

  scrollRight() {
    if (this.selectedIndex < this.items.length - 1) {
      this.selectedIndex++;
      this.updateScroll();
    }
  }

  selectCard(index: number) {
    this.selectedIndex = index;
    this.updateScroll();
  }

  private updateScroll() {
    const container = document.querySelector('.card-container') as HTMLElement;
    const card = container.children[this.selectedIndex] as HTMLElement;
    const offset = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2) - 70;
    container.scrollTo({ left: offset, behavior: 'smooth' });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.scrollLeft();
    } else if (event.key === 'ArrowRight') {
      this.scrollRight();
    }
  }
}
