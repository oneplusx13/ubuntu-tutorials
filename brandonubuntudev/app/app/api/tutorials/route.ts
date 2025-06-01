
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const level = searchParams.get('level')
    const published = searchParams.get('published')
    const featured = searchParams.get('featured')

    const where: any = {}
    
    if (type) where.type = type
    if (level) where.level = level
    if (published !== null) where.published = published === 'true'
    if (featured !== null) where.featured = featured === 'true'

    const tutorials = await prisma.tutorial.findMany({
      where,
      include: {
        category: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        _count: {
          select: {
            codeSnippets: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(tutorials)
  } catch (error) {
    console.error('Error fetching tutorials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tutorials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      slug,
      description,
      content,
      published,
      featured,
      categoryId,
      authorId,
    } = body

    // Validate required fields
    if (!title || !slug || !description || !categoryId || !authorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingTutorial = await prisma.tutorial.findUnique({
      where: { slug }
    })

    if (existingTutorial) {
      return NextResponse.json(
        { error: 'Tutorial with this slug already exists' },
        { status: 409 }
      )
    }

    const tutorial = await prisma.tutorial.create({
      data: {
        title,
        slug,
        description,
        content,
        published: published || false,
        featured: featured || false,
        categoryId,
        authorId,
      },
      include: {
        category: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    })

    return NextResponse.json(tutorial, { status: 201 })
  } catch (error) {
    console.error('Error creating tutorial:', error)
    return NextResponse.json(
      { error: 'Failed to create tutorial' },
      { status: 500 }
    )
  }
}
