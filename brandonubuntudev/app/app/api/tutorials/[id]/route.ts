
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tutorial = await prisma.tutorial.findUnique({
      where: { id: params.id },
      include: {
        category: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        codeSnippets: true,
      }
    })

    if (!tutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(tutorial)
  } catch (error) {
    console.error('Error fetching tutorial:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tutorial' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    } = body

    // Check if tutorial exists
    const existingTutorial = await prisma.tutorial.findUnique({
      where: { id: params.id }
    })

    if (!existingTutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    // Check if slug is being changed and if it conflicts
    if (slug && slug !== existingTutorial.slug) {
      const slugConflict = await prisma.tutorial.findUnique({
        where: { slug }
      })

      if (slugConflict) {
        return NextResponse.json(
          { error: 'Tutorial with this slug already exists' },
          { status: 409 }
        )
      }
    }

    const tutorial = await prisma.tutorial.update({
      where: { id: params.id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(description && { description }),
        ...(content !== undefined && { content }),
        ...(published !== undefined && { published }),
        ...(featured !== undefined && { featured }),
        ...(categoryId && { categoryId }),
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

    return NextResponse.json(tutorial)
  } catch (error) {
    console.error('Error updating tutorial:', error)
    return NextResponse.json(
      { error: 'Failed to update tutorial' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if tutorial exists
    const existingTutorial = await prisma.tutorial.findUnique({
      where: { id: params.id }
    })

    if (!existingTutorial) {
      return NextResponse.json(
        { error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    await prisma.tutorial.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Tutorial deleted successfully' })
  } catch (error) {
    console.error('Error deleting tutorial:', error)
    return NextResponse.json(
      { error: 'Failed to delete tutorial' },
      { status: 500 }
    )
  }
}
