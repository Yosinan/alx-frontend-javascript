interface MajorCredits {
    credits: number;
    brand: "MaCr";
  }
  
  interface MinorCredits {
    credits: number;
    brand: "MinCr";
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MaCr",
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinCr",
    };
  }
  