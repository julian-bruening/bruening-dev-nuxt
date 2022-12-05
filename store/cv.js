import {
  ImageRun,
  Column,
  ColumnBreak,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
  ExternalHyperlink
} from 'docx'
import { saveAs } from 'file-saver'

export const state = () => ({
})

const PHONE_NUMBER = '+4915756016634'
const EMAIL = 'julian@bruening.dev'
const LOCATION = 'Osnabrück, DE'
const WEBSITE = 'https://www.bruening.dev'
const RATE = '520 / Tag'

// Width: 11906 px
// 21.00086 cm
// Height: 16838 px
// 29.70086 cm

// 1cm = 567px
const oneCmInPx = 567
const documentWidth = 11906
// const documentHeight = 16838

const leftPanelWidthInCm = 5.2 + 0.25
const horizontalMarginInCm = 1.5
const verticalMarginInCm = 2.5

const leftPanelWidth = leftPanelWidthInCm * oneCmInPx
const horizontalMargin = horizontalMarginInCm * oneCmInPx
const verticalMargin = verticalMarginInCm * oneCmInPx

const documentStyles = {
  default: {
    heading1: {
      run: {
        font: 'Verdana',
        size: 38,
        color: '333131',
        smallCaps: true
      },
      paragraph: {
        spacing: { line: 240 }
      }
    },
    heading2: {
      run: {
        font: 'Verdana',
        size: 29,
        color: '333131',
        smallCaps: true
      },
      paragraph: {
        spacing: { line: 340, after: 180 }
      }
    },
    heading3: {
      run: {
        font: 'Calibri',
        size: 24,
        color: '333131',
        bold: true
      }
    }
    // heading3: {
    //   run: {
    //     font: 'Calibri',
    //     size: 26,
    //     bold: true
    //   },
    //   paragraph: {
    //     spacing: { line: 276 }
    //   }
    // },
    // heading4: {
    //   run: {
    //     font: 'Calibri',
    //     size: 26,
    //     bold: true
    //   },
    //   paragraph: {
    //     alignment: AlignmentType.JUSTIFIED
    //   }
    // }
  },
  paragraphStyles: [
    {
      id: 'normalPara',
      name: 'Normal Para',
      basedOn: 'Normal',
      next: 'Normal',
      quickFormat: true,
      run: {
        font: 'Calibri',
        size: 21
      },
      paragraph: {
        spacing: { line: 316, before: 5 * 72 * 0.1, after: 5 * 72 * 0.05 },
        leftTabStop: 500
      }
    },
    {
      id: 'caption',
      name: 'Caption',
      basedOn: 'normalPara',
      next: 'Normal',
      quickFormat: true,
      run: {
        font: 'Verdana',
        size: 14,
        smallCaps: true,
        color: '4d4949',
        bold: true
      },
      paragraph: {
        spacing: { line: 180, before: 5 * 72 * 0.1, after: 0 }
      }
    },
    {
      id: 'lightPara',
      name: 'Light Para',
      basedOn: 'normalPara',
      run: {
        color: '8c8888'
      },
      paragraph: {
        spacing: { before: 0, after: 0 }
      }
    }
  ]
}

export const mutations = {
  async generate (state, projects) {
    const imageData = await fetch('/cv_image.jpg' /* ... */)
      .then(res => res.blob())
    console.log('projects', projects.length)
    const doc = new Document({
      styles: documentStyles,
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
            createHeading('Julian Brüning'),
            new Paragraph({
              children: [
                new ImageRun({
                  data: imageData,
                  transformation: {
                    width: 180,
                    height: 180 * 2 / 3
                  }
                })
              ],
              style: 'normalPara',
              spacing: {
                after: 240
              }
            }),
            new Paragraph({
              children: [
                ...createContactInfo(EMAIL, PHONE_NUMBER, WEBSITE, LOCATION, RATE)
              ],
              style: 'normalPara',
              spacing: {
                after: 240
              }
            }),
            ...createSkills(skills),
            createHeading('Full Stack Web & App Developer', true),
            createSubHeading('Projekte'),
            ...projects
              .map((project) => {
                const arr = []

                const duration = project.duration
                let durationStr = ''
                if (duration > 1) {
                  durationStr = `${duration} Monate`
                } else if (duration === 1) {
                  durationStr = '1 Monat'
                } else if (duration > 0.25) {
                  durationStr = `${duration * 4} Wochen`
                } else if (duration === 0.25) {
                  durationStr = '1 Woche'
                }
                const children = []
                children.push(
                  new TextRun(durationStr)
                )
                if (project.company) {
                  children.push(
                    new TextRun(' | ' + project.company)
                  )
                }
                if (project.field) {
                  children.push(
                    new TextRun(' | ' + project.field)
                  )
                }

                arr.push(new Paragraph({
                  children,
                  style: 'lightPara',
                  spacing: {
                    after: 0
                  }
                }))
                arr.push(new Paragraph({
                  text: project.title,
                  // text: project.title + ': ' + project.subtitle,
                  heading: HeadingLevel.HEADING_3,
                  spacing: {
                    after: project.technologies ? 0 : 240
                  }
                }))

                if (project.technologies) {
                  arr.push(new Paragraph({
                    text: project.technologies,
                    style: 'lightPara',
                    spacing: {
                      after: 240
                    }
                  }))
                }

                // arr.push(new Paragraph({
                //   text: project.summary,
                // }))

                // arr.push(
                //   createInstitutionHeader(
                //     project.company.name,
                //     createPositionDateText(project.duration, project.isCurrent)
                //   )
                // )
                // arr.push(createRoleText(project.title))

                // const bulletPoints = splitParagraphIntoBullets(project.summary)

                // bulletPoints.forEach((bulletPoint) => {
                //   arr.push(createBullet(bulletPoint))
                // })

                return arr
              })
              .reduce((prev, curr) => prev.concat(curr), [])
          ]
        }
      ]
    })

    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'test.docx')
    })
  }
}

const skills = [
  {
    name: 'TypeScript',
    category: 'language',
    highlight: true
  },
  {
    name: 'JavaScript',
    category: 'language'
  },
  {
    name: 'Go',
    category: 'language',
    highlight: true
  },
  {
    name: 'Swift',
    category: 'language'
  },
  {
    name: 'Python',
    category: 'language'
  },
  {
    name: 'UML',
    category: 'language'
  },
  {
    name: 'GraphQL',
    category: 'language',
    highlight: true
  }
]
// Farmeworks
skills.push(...[
  {
    name: 'Vue 3',
    category: 'framework',
    highlight: true
  },
  {
    name: 'Nest.js',
    category: 'framework',
    highlight: true
  },
  {
    name: 'Nx',
    category: 'framework'
  },
  {
    name: 'Quasar',
    category: 'framework',
    highlight: true
  },
  {
    name: 'Nuxt.js',
    category: 'framework'
  },
  {
    name: 'Ionic',
    category: 'framework'
  },
  {
    name: 'Angular',
    category: 'framework'
  },
  {
    name: 'Django',
    category: 'framework'
  }
])

// Data-Access
skills.push(...[
  {
    name: 'PostgreSQL',
    category: 'data-access',
    highlight: true
  },
  {
    name: 'Hasura',
    category: 'data-access',
    highlight: true
  },
  {
    name: 'Firebase',
    category: 'data-access'
  },
  {
    name: 'SQLite',
    category: 'data-access'
  }
])

// Mobile
skills.push(...[
  {
    name: 'iOS',
    category: 'mobile'
  },
  {
    name: 'Android',
    category: 'mobile'
  },
  {
    name: 'Capacitor',
    category: 'mobile',
    highlight: true
  }
])

// DevOps
skills.push(...[
  {
    name: 'Git (GitHub, GitLab)',
    category: 'devops',
    highlight: true
  },
  {
    name: 'Ubuntu',
    category: 'devops',
    highlight: true
  },
  {
    name: 'Docker',
    category: 'devops'
  },
  {
    name: 'Nginx',
    category: 'devops'
  },
  {
    name: 'Jira',
    category: 'tools'
  },
  {
    name: 'Confluence',
    category: 'tools'
  },
  {
    name: 'VS Code',
    category: 'tools',
    highlight: true
  }
])

// Personal
skills.push(...[
  {
    name: 'Teamfähig',
    category: 'personal'
  },
  {
    name: 'Zielorientiert',
    category: 'personal'
  },
  {
    name: 'Entscheidungsstark',
    category: 'personal'
  }
])

// Sectors
skills.push(...[
  {
    name: 'Steuerberatung',
    category: 'sector'
  },
  {
    name: 'Agenturarbeit',
    category: 'sector'
  },
  {
    name: 'Schuhgroßhandel',
    category: 'sector'
  }
])

const categoryLabels = [
  {
    key: 'language',
    name: 'Sprachen'
  },
  {
    key: 'framework',
    name: 'Framework'
  },
  {
    key: 'data-access',
    name: "DB's (& Mehr)"
  },
  {
    key: 'mobile',
    name: 'Mobile'
  },
  {
    key: 'devops',
    name: 'DevOps'
  },
  {
    key: 'tools',
    name: 'Tools'
  },
  {
    key: 'personal',
    name: 'Persönlich'
  },
  {
    key: 'sector',
    name: 'Branchenerfahrung'
  }
]

function createContactInfo (email, phoneNumber, website, location, rate) {
  return [
    createHyperlinkWithIcon('✉️', email, 'mailto:' + email, false),
    createHyperlinkWithIcon('📞', phoneNumber, 'tel:' + phoneNumber),
    createHyperlinkWithIcon('🌐', website.replace('https://', ''), website),
    ...createLineWithIcon('📍', location),
    ...createLineWithIcon(' €', rate)
  ]
}

function createSkills (skills) {
  // categoryLabels
  const categoriesAndSkills = []
  for (const categoryLabel of categoryLabels) {
    const text = []
    let first = true
    for (const skill of skills) {
      if (skill.category === categoryLabel.key) {
        text.push(new TextRun({
          text: first ? skill.name : ', ' + skill.name
          // bold: skill.highlight
        }))
        first = false
      }
    }
    if (text.length > 0) {
      categoriesAndSkills.push(createCaption(categoryLabel.name))
      categoriesAndSkills.push(
        new Paragraph({
          children: text,
          style: 'normalPara',
          spacing: {
            after: 180,
            line: 240
          }
        }))
    }
  }
  if (categoriesAndSkills.length === 0) {
    return []
  } else {
    return [
      createSubHeading('Kompetenzen'),
      ...categoriesAndSkills
    ]
  }
}

function createHyperlinkWithIcon (icon, text, link, withLineBreak = true) {
  return new ExternalHyperlink({
    children: [
      ...createLineWithIcon(icon, text, withLineBreak)
    ],
    link
  })
}
function createLineWithIcon (icon, text, withLineBreak = true) {
  return [
    new TextRun({
      text: `${icon}\t`,
      break: withLineBreak ? 1 : 0
    }),
    new TextRun({
      text: `${text}`
    })
  ]
}

function createHeading (text, columnBreak = false) {
  let children = [
    new TextRun({
      text
    })
  ]
  if (columnBreak) {
    children = [new ColumnBreak()].concat(children)
  }

  return new Paragraph({
    children,
    heading: HeadingLevel.HEADING_1,
    spacing: {
      after: 120
    }
  })
}

function createCaption (text) {
  return new Paragraph({
    text,
    style: 'caption',
    spacing: {
      after: 0
    }
  })
}

function createSubHeading (text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2
  })
}
