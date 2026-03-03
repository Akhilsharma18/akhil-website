require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Contact = require('./models/Contact');
const ProfileLink = require('./models/ProfileLink');

const seed = async () => {
  await connectDB();

  // Clear existing
  await Project.deleteMany({});
  await Skill.deleteMany({});
  await Contact.deleteMany({});
  await ProfileLink.deleteMany({});

  // Projects
  await Project.insertMany([
    {
      title: 'JKBOSE Portal',
      description: 'A comprehensive portal for JKBOSE students to access results, syllabus, datesheets and important notices in one place.',
      github: 'https://github.com/Akhilsharma18/jkbosepro',
      live: 'https://jkbosepro.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Yojna Mitra',
      description: 'A platform that helps citizens discover and apply for government schemes easily, bridging the gap between people and welfare programs.',
      github: 'https://github.com/Akhilsharma18/yojna-mitr',
      live: '',
      tags: ['React', 'Express', 'MongoDB'],
    },
  ]);

  // Skills
  await Skill.insertMany([
    { category: 'Programming Languages', items: ['C++', 'JavaScript', 'Python', 'C'], order: 1 },
    { category: 'Web Technologies', items: ['React', 'NodeJS', 'Express.js', 'HTML', 'CSS'], order: 2 },
    { category: 'Database', items: ['NoSQL', 'MongoDB'], order: 3 },
  ]);

  // Contact
  await Contact.create({
    email: 'kesarakhil123@gmail.com',
    phone: '8082270967',
    linkedin: 'https://www.linkedin.com/in/akhil-sharma-98a848313/',
    github: 'https://github.com/Akhilsharma18',
  });

  // Profile Links
  await ProfileLink.insertMany([
    { platform: 'LeetCode', url: 'https://leetcode.com/u/Akhil_sharma18/', icon: 'lc', order: 1 },
    { platform: 'HackerRank', url: 'https://www.hackerrank.com/profile/kesarakhil123', icon: 'hr', order: 2 },
    { platform: 'Coding Ninjas', url: 'https://www.naukri.com/code360/profile/Akhilkesar', icon: 'cn', order: 3 },
    { platform: 'Codeforces', url: 'https://codeforces.com/profile/akhil_sharma18', icon: 'cf', order: 4 },
    { platform: 'GitHub', url: 'https://github.com/Akhilsharma18', icon: 'gh', order: 5 },
  ]);

  console.log('✅ Database seeded successfully!');
  process.exit();
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
