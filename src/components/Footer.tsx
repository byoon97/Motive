import React from "react";

function Footer() {
  return (
    <div className="w-screen flex flex-col justify-center items-center text-black bg-[#F4F4F4] mt-16 ">
      <div className="text-xs text-start max-w-[940px] m-6 py-4">
        <div className="">
          * Any personal insurance you may have that covers damage to the host’s
          vehicle would kick in before your protection plan, except in limited
          situations for trips booked in Maryland, but this protects your own
          wallet. Liability insurance is provided under a policy issued to
          Motive by Travelers Excess and Surplus Lines Company. Terms,
          conditions, and exclusions apply. The policy does not provide coverage
          for damage to a host’s vehicle.
        </div>
        <br />
        <div>
          ** Liability insurance is provided under a policy issued to Motive by
          a third party. Terms, conditions, and exclusions apply. The policy
          does not provide coverage for damage to a host’s vehicle.
        </div>
        <br />
        <div>
          For questions or information about the third party liability insurance
          that is included in protection plans, consumers in Maryland and the
          licensed states listed here may contact Motive Insurance Agency at
          (415) 508-0283 or claims@Motive.agency. For questions about how damage
          to a host’s vehicle is handled, visit the Motive Support site.
        </div>
        <br />
        <div>
          When a trip is booked in the state of Washington, physical damage to
          the host’s vehicle is covered by insurance purchased by Motive, but
          Motive’s insurance does not change the contractual responsibilities of
          hosts or guests with respect to physical damage to a host’s vehicle.
        </div>
        <br />
        <div className="text-start">
          *** Terms, conditions, and exclusions apply.
        </div>
      </div>
    </div>
  );
}

export default Footer;
