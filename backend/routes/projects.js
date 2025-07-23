const express = require('express')
const router = express.Router()

// Mock projects data
const projects = [
  {
    id: 1,
    title: 'Solar Farm Complex',
    category: 'Solar Energy',
    location: 'California, USA',
    date: '2024',
    description:
      '50MW solar farm installation providing clean energy to 15,000 households.',
    specs: {
      capacity: '50MW',
      panels: '150,000',
      area: '200 acres',
      output: '85,000 MWh/year',
    },
    status: 'Completed',
    image: 'solar-farm',
  },
  {
    id: 2,
    title: 'Wind Energy Park',
    category: 'Wind Energy',
    location: 'Texas, USA',
    date: '2023',
    description:
      '100MW wind farm with 25 turbines generating renewable energy.',
    specs: {
      capacity: '100MW',
      turbines: '25',
      height: '120m',
      output: '300,000 MWh/year',
    },
    status: 'Completed',
    image: 'wind-farm',
  },
  {
    id: 3,
    title: 'Smart Grid Network',
    category: 'Grid Technology',
    location: 'New York, USA',
    date: '2024',
    description:
      'Advanced smart grid implementation for improved energy distribution.',
    specs: {
      coverage: '500,000 homes',
      efficiency: '98%',
      savings: '25%',
      monitoring: 'Real-time',
    },
    status: 'In Progress',
    image: 'smart-grid',
  },
]

// Get all projects
router.get('/', (req, res) => {
  try {
    const { category, status, limit } = req.query

    let filteredProjects = [...projects]

    // Filter by category
    if (category) {
      filteredProjects = filteredProjects.filter(
        (project) => project.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by status
    if (status) {
      filteredProjects = filteredProjects.filter(
        (project) => project.status.toLowerCase() === status.toLowerCase()
      )
    }

    // Apply limit
    if (limit) {
      filteredProjects = filteredProjects.slice(0, parseInt(limit))
    }

    res.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
    })
  }
})

// Get project by ID
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id)
    const project = projects.find((p) => p.id === projectId)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      })
    }

    res.json({
      success: true,
      data: project,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
    })
  }
})

// Get project categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(projects.map((project) => project.category))]

    res.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
    })
  }
})

// Get project statistics
router.get('/stats/overview', (req, res) => {
  try {
    const stats = {
      total: projects.length,
      completed: projects.filter((p) => p.status === 'Completed').length,
      inProgress: projects.filter((p) => p.status === 'In Progress').length,
      categories: projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1
        return acc
      }, {}),
      totalCapacity: projects.reduce((sum, project) => {
        const capacity = project.specs.capacity
        if (capacity && capacity.includes('MW')) {
          return sum + parseInt(capacity.replace('MW', ''))
        }
        return sum
      }, 0),
    }

    res.json({
      success: true,
      data: stats,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project statistics',
    })
  }
})

module.exports = router
