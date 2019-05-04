import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  jobs: any[];


  constructor() { }

  ngOnInit() {
    const that = this;

    this.jobs = [
      {
        companyName: 'Awardco',
        startDate: new Date(),
        endDate: null,
        duration: function () {
          return that.checkJobDuration(this.startDate, this.endDate);
        },
        image: '../../assets/awardco.jpeg',
        positions: [
          {
            title: 'Front-End Engineer',
            startDate: new Date(1554098400000),
            endDate: null,
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Orem, Utah',
            duties: [
              'Own the front-end architecture for the Awardco platform',
              'Control the integration of modern Javascript frameworks and libraries with code base',
              'Fine-tune the front-end experience and code to hit accessibility standards'
            ]
          }
        ]
      },
      {
        companyName: 'Torch LMS',
        startDate: new Date(1448953200000),
        endDate: new Date(1554098400000),
        duration: function () {
          return that.checkJobDuration(this.startDate, this.endDate);
        },
        image: '../../assets/torchLogo.png',
        positions: [
          {
            title: 'Software Engineer',
            startDate: new Date(1506837600000),
            endDate: new Date(1554098400000),
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Lehi, Utah',
            duties: [
              'Improved site performance by adding pagination to all existing data tables',
              'Implemented page where supervisors in application can view their direct reports in a tree view',
              'Leveraged knowledge: Angular JS, Java (spring), AWS, PostgreSQL'
            ]
          },
          {
            title: 'Jr. Software Engineer',
            startDate: new Date(1470031200000),
            endDate: new Date(1506837600000),
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Lehi, Utah',
            duties: [
              'Reduced app latency by optimizing SQL queries',
              'Utilized AWS to roll code to our UAT environment 2x/day',
              'Leveraged knowledge: Angular JS, Java (spring), AWS, PostgreSQL'
            ]
          },
          {
            title: 'QA Tester',
            startDate: new Date(1448953200000),
            endDate: new Date(1491026400000),
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Lehi, Utah',
            duties: [
              'Reduced support tickets by 84% by establishing and regularly updating a well-optimized knowledge base',
              'Revitalized QA process by building out automated daily endpoint testing on our entire application'
            ]
          }
        ]
      },
      {
        companyName: 'Cooper Technology',
        startDate: new Date(),
        endDate: new Date(),
        duration: function () {
          return that.checkJobDuration(this.startDate, this.endDate);
        },
        image: '../../assets/cooperTechnologyLogo.png',
        positions: [
          {
            title: 'Front-End Developer (contract)',
            startDate: new Date(1533103200000),
            endDate: null,
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Remote',
            duties: [
              'Planned and executed a process where farmers can view the status of their agricultural equipment in real time',
              'Developed Android/Ios App using Ionic (v4) to allow farmers to scan the tags of their cattle to keep track of their health',
              'Leveraged knowledge: Angular (2+), PixiJS'
            ]
          }
        ]
      },
      {
        companyName: 'SkillAmp',
        startDate: new Date(),
        endDate: new Date(),
        duration: function () {
          return that.checkJobDuration(this.startDate, this.endDate);
        },
        image: '../../assets/skillampLogo.png',
        positions: [
          {
            title: 'Software Engineer (contract)',
            startDate: new Date(1506837600000),
            endDate: new Date(1541052000000),
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Remote',
            duties: [
              'Designed and built multi-tenant SaaS application from the ground up',
              'Leveraged knowledge: Angular (2+), ChartJS, NodeJS (Express), PostgreSQL'
            ]
          }
        ]
      },
      {
        companyName: 'Server Plus',
        startDate: new Date(1420095600000),
        endDate: new Date(1448953200000),
        duration: function () {
          return that.checkJobDuration(this.startDate, this.endDate);
        },
        image: '../../assets/serverPlusLogo.jpg',
        positions: [
          {
            title: 'Desktop Support Analyst',
            startDate: new Date(1420095600000),
            endDate: new Date(1448953200000),
            duration: function () {
              return that.checkJobDuration(this.startDate, this.endDate);
            },
            location: 'Remote',
            duties: [
              'Consistently recognized for highest number of tickets resolved on team',
              'Troubleshoot all aspects of computer issues using a ticketing system'
            ]
          }
        ]
      },
    ]
  }

  checkJobDuration(startDate, endDate) {
    endDate == null ? endDate = new Date() : '';
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let months: any = Math.round(diffDays / 30);
    let years: any = 0;
    while (months >= 12) {
      years++;
      months -= 12;
    }

    if (years === 0) {
      years = '';
    } else if (years === 1) {
      years += ' yr ';
    } else {
      years += ' yrs ';
    }

    if (months === 1) {
      months += ' mo';
    } else {
      months += ' mos';
    }

    return `${years}${months.trim()}`;
  }

  checkCompanyDuration() {
    const experienceStarted = new Date(1470031200000);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - experienceStarted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
  }

}
