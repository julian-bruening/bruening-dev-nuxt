import {
  BorderStyle,
  // Document,
  FrameAnchorType,
  FrameProperties,
  HorizontalPositionAlign,
  // Packer,
  // Paragraph,
  // Tab,
  // TextRun,
  VerticalPositionAlign,
  Column,
  ColumnBreak,
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun
} from 'docx'
import { saveAs } from 'file-saver'

export const state = () => ({
})
const educations = [
  {
    degree: 'Master of Science (MSc)',
    fieldOfStudy: 'Computer Science',
    notes: 'Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithms, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.',
    schoolName: 'University College London',
    startDate: {
      year: 2012
    },
    endDate: {
      year: 2013
    }
  }
]

const skills = [
  {
    name: 'Angular'
  },
  {
    name: 'TypeScript'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'NodeJS'
  }
]

function createContactInfo (phoneNumber, email) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun(`Mobile: ${phoneNumber} | Email: ${email}`),
      new TextRun({
        text: 'Osnabrück, DE',
        break: 1,
        spacing: {
          after: 120
        }
      })
    ]
  })
}

function createHeading (text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    thematicBreak: true,
    spacing: {
      after: 120
    }
  })
}

function createSubHeading (text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2
  })
}

function createInstitutionHeader (institutionName, dateText) {
  return new Paragraph({
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: TabStopPosition.MAX
      }
    ],
    children: [
      new TextRun({
        text: institutionName,
        bold: true
      }),
      new TextRun({
        children: [new Tab(), dateText],
        bold: true
      })
    ]
  })
}

function createRoleText (roleText) {
  return new Paragraph({
    children: [
      new TextRun({
        text: roleText,
        italics: true
      })
    ]
  })
}

function createBullet (text) {
  return new Paragraph({
    text,
    bullet: {
      level: 0
    }
  })
}

// tslint:disable-next-line:no-any
function createSkillList (skills) {
  return new Paragraph({
    children: [new TextRun(skills.map(skill => skill.name).join(', ') + '.')]
  })
}

// tslint:disable-next-line:no-any
function createAchievementsList (achievements) {
  return achievements.map(
    achievement =>
      new Paragraph({
        text: achievement.name,
        bullet: {
          level: 0
        }
      })
  )
}

function createInterests (interests) {
  return new Paragraph({
    children: [new TextRun(interests)]
  })
}

function splitParagraphIntoBullets (text) {
  return text.split('\n\n')
}

// tslint:disable-next-line:no-any
function createPositionDateText (startDate, endDate, isCurrent) {
  const startDateText = getMonthFromInt(startDate.month) + '. ' + startDate.year
  const endDateText = isCurrent ? 'Present' : `${getMonthFromInt(endDate.month)}. ${endDate.year}`

  return `${startDateText} - ${endDateText}`
}

function getMonthFromInt (value) {
  switch (value) {
    case 1:
      return 'Jan'
    case 2:
      return 'Feb'
    case 3:
      return 'Mar'
    case 4:
      return 'Apr'
    case 5:
      return 'May'
    case 6:
      return 'Jun'
    case 7:
      return 'Jul'
    case 8:
      return 'Aug'
    case 9:
      return 'Sept'
    case 10:
      return 'Oct'
    case 11:
      return 'Nov'
    case 12:
      return 'Dec'
    default:
      return 'N/A'
  }
}

const achievements = [
  {
    issuer: 'Oracle',
    name: 'Oracle Certified Expert'
  }
]

const PHONE_NUMBER = '+4915756016634'
const EMAIL = 'julian@bruening.dev'
const DAILYRATE = '640'

// Width: 11906 px
// 21.00086 cm
// Height: 16838 px
// 29.70086 cm

// 1cm = 567px
const oneCmInPx = 567
const documentWidth = 11906
const documentHeight = 16838

const leftPanelWidthInCm = 5
const horizontalMarginInCm = 1.5
const verticalMarginInCm = 2.5

const leftPanelWidth = leftPanelWidthInCm * oneCmInPx
const horizontalMargin = horizontalMarginInCm * oneCmInPx
const verticalMargin = verticalMarginInCm * oneCmInPx

export const mutations = {
  testGenerate () {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: verticalMargin,
                right: horizontalMargin,
                bottom: verticalMargin,
                left: horizontalMargin
              }
            },
            column: {
              space: 120,
              count: 2,
              equalWidth: false,
              children: [
                new Column({ width: leftPanelWidth }),
                new Column({ width: documentWidth - leftPanelWidth - horizontalMargin * 2 })
              ]
            }
          },
          children: [
            new Paragraph({
              text: 'Julian Brüning',
              heading: HeadingLevel.TITLE,
              spacing: {
                after: 120
              }
            }),
            new Paragraph({
              children: [
                new TextRun('Coming soon.'),
                new ColumnBreak(),
                new TextRun('Cooming soon.')
              ]
            })
          ]
        }
      ]
    })

    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'test.docx')
    })
  },

  generate (state, options) {
    console.log('options', options)
    const children = []
    // Generate a CV
    children.push(
      new Paragraph({
        text: 'Julian Brüning',
        heading: HeadingLevel.TITLE,
        spacing: {
          after: 120
        }
      }),
      createContactInfo(PHONE_NUMBER, EMAIL)
    )

    children.push(
      createHeading('Erfahrung'),
      ...options.projects
        .map((position) => {
          const arr = []

          arr.push(
            createInstitutionHeader(
              position.company.name,
              createPositionDateText(position.startDate, position.endDate, position.isCurrent)
            )
          )
          arr.push(createRoleText(position.title))

          const bulletPoints = splitParagraphIntoBullets(position.summary)

          bulletPoints.forEach((bulletPoint) => {
            arr.push(createBullet(bulletPoint))
          })

          return arr
        })
        .reduce((prev, curr) => prev.concat(curr), [])
    )

    if (options.includeEducation) {
      children.push([
      ])
    }

    // createHeading('Skills, Achievements and Interests'),
    // createSubHeading('Skills'),
    // createSkillList(skills),
    // createSubHeading('Achievements'),
    // ...createAchievementsList(achievements),
    // createSubHeading('Interests'),
    // createInterests('Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing.'),
    // createHeading('References'),
    // new Paragraph(
    //   'Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk'
    // ),
    // new Paragraph('More references upon request'),
    // new Paragraph({
    //   text: 'This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.',
    //   alignment: AlignmentType.CENTER
    // })

    const document = new Document({
      sections: [
        {
          children
        }
      ]
    })

    Packer.toBlob(document).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'CV-Julian-Bruening.docx')
    })
  }
}
